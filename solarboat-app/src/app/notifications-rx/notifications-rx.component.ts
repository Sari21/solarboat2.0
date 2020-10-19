import {Component} from '@angular/core';
import {RxStomp} from "@stomp/rx-stomp";

import * as SockJS from 'sockjs-client';
import {map} from "rxjs/operators";
import { BoatData } from '../model/boat-data';
import {BoatDataComponent} from "../boat-data/boat-data.component"

@Component({
  selector: 'app-notifications-rx',
  templateUrl: './notifications-rx.component.html'
})
export class NotificationsRxComponent {

  constructor(private boatDataComponent: BoatDataComponent){}

  private client: RxStomp;


  public notifications: string[] = [];

  connectClicked() {
    if (!this.client || this.client.connected) {
      this.client = new RxStomp();
      this.client.configure({
        webSocketFactory: () => new SockJS('http://localhost:8080/notifications'),
        debug: (msg: string) => console.log(msg)
      });
      this.client.activate();

      this.watchForNotifications();

      console.info('connected!');
    }
  }

  private watchForNotifications() {
    this.client.watch('/user/notification/item')
      .pipe(
        map((response) => {
          const data = JSON.parse(response.body);
          this.boatDataComponent.addGraphData(data);
          return data;
        }))
      .subscribe((notification: string) => this.notifications.push(notification));
  }

  disconnectClicked() {
    if (this.client && this.client.connected) {
      this.client.deactivate();
      this.client = null;
      console.info("disconnected :-/");
    }
  }

  startClicked() {
    if (this.client && this.client.connected) {
      this.client.publish({destination: '/swns/start'});
    }
  }

  stopClicked() {
    if (this.client && this.client.connected) {
      this.client.publish({destination: '/swns/stop'});
    }
  }
}
