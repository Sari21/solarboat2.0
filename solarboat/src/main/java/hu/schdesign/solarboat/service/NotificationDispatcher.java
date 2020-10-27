package hu.schdesign.solarboat.service;


import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.model.ResponseBoatData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.HashSet;
import java.util.Set;

@Service
public class NotificationDispatcher {
    private final BoatDataService boatDataService;
    private final DataGroupService dataGroupService;
    private static final Logger LOGGER = LoggerFactory.getLogger(NotificationDispatcher.class);
    private final SimpMessagingTemplate template;
    private Set<String> listeners = new HashSet<>();

    @Autowired
    public NotificationDispatcher(
            BoatDataService boatDataService,
            DataGroupService dataGroupService,
            SimpMessagingTemplate template) {
        this.boatDataService = boatDataService;
        this.dataGroupService = dataGroupService;
        this.template = template;
    }

    public void add(String sessionId) {
        listeners.add(sessionId);
        //dispatch(dataGroupService.getDataGroupLast());
    }

    public void remove(String sessionId) {
        listeners.remove(sessionId);
    }

    public void dispatch(ResponseBoatData boatData) {
        for (String listener : listeners) {
            LOGGER.info("Sending notification to " + listener);

            SimpMessageHeaderAccessor headerAccessor = SimpMessageHeaderAccessor.create(SimpMessageType.MESSAGE);
            headerAccessor.setSessionId(listener);
            headerAccessor.setLeaveMutable(true);

            int value = (int) Math.round(Math.random() * 100d);
            template.convertAndSendToUser(
                    listener,
                    "/notification/item",
                    boatData,
                    //new Notification(Integer.toString(value)),
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