package hu.schdesign.solarboat.api;


import hu.schdesign.solarboat.service.NotificationsDispatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationsController {
    private final NotificationsDispatcher dispatcher;
    @Autowired
    public NotificationsController(NotificationsDispatcher dispatcher) {
        this.dispatcher = dispatcher;
    }
    @MessageMapping("/start")
    public void start(StompHeaderAccessor stompHeaderAccessor) {
        dispatcher.add(stompHeaderAccessor.getSessionId());
    }
    @MessageMapping("/stop")
    public void stop(StompHeaderAccessor stompHeaderAccessor) {
        dispatcher.remove(stompHeaderAccessor.getSessionId());
    }
}
