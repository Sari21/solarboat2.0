package hu.schdesign.solarboat.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.HashSet;
import java.util.Set;

@Service
public class NotificationsDispatcher {

    private static final Logger LOGGER = LoggerFactory.getLogger(NotificationsDispatcher.class);

    private final SimpMessagingTemplate template;

    private Set<String> listeners = new HashSet<>();

    public NotificationsDispatcher(SimpMessagingTemplate template) {
        this.template = template;
    }

    public void add(String sessionId) {
        listeners.add(sessionId);
        dispatch();
    }

    public void remove(String sessionId) {
        listeners.remove(sessionId);
    }

    @Scheduled(fixedDelay = 2000)
    public void dispatch() {
        for (String listener : listeners) {
            LOGGER.info("Sending notification to " + listener);

            SimpMessageHeaderAccessor headerAccessor = SimpMessageHeaderAccessor.create(SimpMessageType.MESSAGE);
            headerAccessor.setSessionId(listener);
            headerAccessor.setLeaveMutable(true);

            int value = (int) Math.round(Math.random() * 100d);
            template.convertAndSendToUser(
                    listener,
                    "/notification/item",
                    "{valami: halihó}",
                    headerAccessor.getMessageHeaders());
        }
    }

    @EventListener
    public void sessionDisconnectionHandler(SessionDisconnectEvent event) {
        String sessionId = event.getSessionId();
        LOGGER.info("Disconnecting " + sessionId + "!");
        remove(sessionId);
    }
}
