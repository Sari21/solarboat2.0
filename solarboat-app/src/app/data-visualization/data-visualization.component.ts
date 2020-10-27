import { Component, OnInit, Output, NgModule, Input, OnDestroy } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
import { interval, Subscription, Observable } from "rxjs";
import { Dates } from "../model/dates";
import {RxStomp} from "@stomp/rx-stomp";
import * as SockJS from 'sockjs-client';
import {map} from "rxjs/operators";
import {NotificationsService} from '../notifications.service'
import {NotificationsRxComponent} from '../notifications-rx/notifications-rx.component'

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css']
})
export class DataVisualizationComponent implements OnInit {

  @Output() dates: Dates[] = [];
  @Input() selectedDate: Dates;
  BASE_URL = "http://localhost:8080/api/dataGroup/export";
  EXPORT_URL = this.BASE_URL;
  data;
  show = false;
  showDetails = false;
  proba;
  @Input() selectedTabIndex;
  private boatIsActive: Boolean;
  

  constructor(private dataService: BoatDataService,
  //   private notifications: NotificationsRxComponent
  private notifications: NotificationsService
    ) { }

  ngOnInit(): void {
    this.getLastDataGroup();
    this.getDates();
    this.connect();
   
  }
  ngOnDestroy(){
   this.disconnect();
  }
  public async getDates() {
    this.dataService.getDate().subscribe(
      (res) => {
        this.dates = res;
        this.selectedDate = res[res.length - 1];
      },
      (err) => {
        alert("get error");
      }
    );
  }
public connect(){
  if(this.checkBoatIsActive()){
    this.notifications.connect();
    this.notifications.startListening();
  }
}
public disconnect(){
  //if(this.notifications.isConnected()){
    this.notifications.stopListening();
    this.notifications.disconnect();
 // }
}
public getLastDataGroup(){
  this.dataService.getLastDataGroup().subscribe((res) => {
    this.data = res;
  });  
}
  public  dateChanged() {
    console.log("Datechanged");
    this.dataService.getDataGroupById(this.selectedDate.name).subscribe((res) => {
      this.data = res;
    });  
  }
 
  public deleteAll() {
    this.dataService.deleteAll();
    this.getDates();
  }
  public deleteById(id: number) {
    this.dataService.deleteById(id);
    this.getDates();
  }
  public setShow() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  onTabChanged(){
    if(this.selectedTabIndex === 0){
      this.connect()
    }
    else{
      this.disconnect();
    }
  }
  checkBoatIsActive(){
    return true;
  }
}
