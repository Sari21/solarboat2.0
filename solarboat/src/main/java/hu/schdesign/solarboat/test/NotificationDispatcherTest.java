package hu.schdesign.solarboat.test;

import hu.schdesign.solarboat.api.DataGroupController;
import hu.schdesign.solarboat.dao.DataGroupRepository;
import hu.schdesign.solarboat.model.Boat.Battery;
import hu.schdesign.solarboat.model.Boat.Coordinates;
import hu.schdesign.solarboat.model.Boat.Motor;
import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.model.ResponseBoatData;
import hu.schdesign.solarboat.service.DataGroupService;
import hu.schdesign.solarboat.service.NotificationDispatcher;
import org.apache.commons.beanutils.converters.BooleanConverter;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.stubbing.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.context.annotation.Bean;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.converter.MessageConverter;
import org.springframework.messaging.converter.SimpleMessageConverter;
import org.springframework.messaging.converter.StringMessageConverter;
import org.springframework.messaging.handler.annotation.support.PayloadMethodArgumentResolver;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;
import org.springframework.web.socket.sockjs.client.SockJsClient;
import org.springframework.web.socket.sockjs.client.WebSocketTransport;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.concurrent.*;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

//@WebAppConfiguration
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class NotificationDispatcherTest {

    @TestConfiguration
    static class DataGroupServiceIntegrationTestContextConfiguration {
        @Bean
        public DataGroupService dataGroupService() {
            return new DataGroupService();
        }
    }

    @TestConfiguration
    static class NotificationDispatcherIntegrationTestContextConfiguration {
        @Bean
        public NotificationDispatcher notificationDispatcher() {
            return new NotificationDispatcher();
        }
    }

    @LocalServerPort
    private int port;
    @Mock
    private  DataGroupRepository dataGroupRepository;
    @Autowired
    private DataGroupService dataGroupService;
    @Autowired
    private NotificationDispatcher notificationDispatcher;
    @Autowired
    private DataGroupController dataGroupController;
//    @MockBean
//    private static DataGroupRepository dataGroupRepository;

    private WebSocketStompClient webSocketStompClient;
    BlockingQueue<String> blockingQueue;
    private CompletableFuture<ResponseBoatData> completableFuture;

    private static final TimeUnit SECONDS = TimeUnit.SECONDS;
    ArrayList<ResponseBoatData> list;

    public NotificationDispatcherTest() throws InterruptedException, ExecutionException, TimeoutException {
    }

    @Before
    public void setupDataGroup() {
        blockingQueue = new LinkedBlockingDeque<>();
        this.webSocketStompClient = new WebSocketStompClient(new SockJsClient(
                Arrays.asList(new WebSocketTransport(new StandardWebSocketClient()))));
    }


    @Test
    public void dispatchSetActiveTest() throws Exception {

        BlockingQueue<Boolean> blockingQueue = new ArrayBlockingQueue(1);

        webSocketStompClient.setMessageConverter(new SimpleMessageConverter());

        when(dataGroupRepository.save(any(DataGroup.class)))
                .thenAnswer((Answer) invocation -> {
                    Object[] args = invocation.getArguments();
                    DataGroup saved = (DataGroup) args[0];
                    return saved;
                });

        StompSession session = null;
        session = webSocketStompClient
                .connect(getWsPath(), new StompSessionHandlerAdapter() {
                })
                .get(1, SECONDS);

        notificationDispatcher.add(session.getSessionId());
        session.subscribe("/user/notification/activity", new StompFrameHandler() {

            @Override
            public Type getPayloadType(StompHeaders headers) {
                return Boolean.class;
            }

            @Override
            public void handleFrame(StompHeaders headers, Object payload) {
                blockingQueue.add((Boolean) payload);
            }
        });
        DataGroup dataGroup = dataGroupService.startDataGroup();
    //    assertTrue(blockingQueue.poll(10, SECONDS));
        // assertEquals("Hello, Mike!", blockingQueue.poll(10, SECONDS));
           assertNotNull(dataGroup);
           assertTrue(dataGroup.isActive());
    }


    private String getWsPath() {
        return String.format("ws://localhost:%d/notifications", port);
    }

    private BoatData createBoatData() {
        BoatData newBoatData = new BoatData();
        newBoatData.setId(Math.abs(new Random().nextLong()));
        newBoatData.setAcceleration(new Coordinates(20, 30, 40));
        newBoatData.getAcceleration().setId(Math.abs(new Random().nextLong()));
        newBoatData.setBattery(new Battery(10, 20, 30, 40));
        newBoatData.getBattery().setId(Math.abs(new Random().nextLong()));
        newBoatData.setCompass(new Coordinates(1, 1, 2));
        newBoatData.getCompass().setId(Math.abs(new Random().nextLong()));
        newBoatData.setMotor(new Motor(22, 33));
        newBoatData.getMotor().setId(Math.abs(new Random().nextLong()));
        newBoatData.setTilt(new Coordinates(44, 33, 22));
        newBoatData.getTilt().setId(Math.abs(new Random().nextLong()));
        newBoatData.setError(new hu.schdesign.solarboat.model.Boat.Error("source", "error message"));
        newBoatData.getError().setId(Math.abs(new Random().nextLong()));
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter sdf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        newBoatData.setDate(sdf.format(now));
        newBoatData.setRawDate(now);
        return newBoatData;
    }


}

