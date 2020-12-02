package hu.schdesign.solarboat.test;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;

import org.springframework.messaging.converter.StringMessageConverter;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;
import org.springframework.web.socket.sockjs.client.SockJsClient;
import org.springframework.web.socket.sockjs.client.WebSocketTransport;

import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.*;

import static org.junit.Assert.assertEquals;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class NotificationsControllerTest {
    @LocalServerPort
    private int port = 8080;

    private WebSocketStompClient webSocketStompClient;
    BlockingQueue<String> blockingQueue;

    private static final TimeUnit SECONDS = TimeUnit.SECONDS;

    public NotificationsControllerTest() throws InterruptedException, ExecutionException, TimeoutException {
    }

    @Before
    public void setup() {
        blockingQueue = new LinkedBlockingDeque<>();
        this.webSocketStompClient = new WebSocketStompClient(new SockJsClient(
                Arrays.asList(new WebSocketTransport(new StandardWebSocketClient()))));
    }

    @Test
    public void verifyGreetingIsReceived() throws Exception {

        // BlockingQueue<String> blockingQueue = new ArrayBlockingQueue(1);

        webSocketStompClient.setMessageConverter(new StringMessageConverter());

        StompSession session = webSocketStompClient
                .connect(getWsPath(), new StompSessionHandlerAdapter() {
                })
                .get(1, SECONDS);

        session.subscribe("/start", new StompFrameHandler() {

            @Override
            public Type getPayloadType(StompHeaders headers) {
                return String.class;
            }

            @Override
            public void handleFrame(StompHeaders headers, Object payload) {
                System.out.println("Received message: " + payload);
                blockingQueue.offer((String) payload);
            }
        });

        session.send("/app/notification", "Mike");

        assertEquals("Mike!", blockingQueue.poll(1, SECONDS));
    }

    private String getWsPath() {
        return String.format("ws://localhost:%d/notifications", port);
    }

}
