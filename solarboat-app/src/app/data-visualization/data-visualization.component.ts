import { Component, OnInit, Output, NgModule, Input, OnDestroy } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
import { interval, Subscription, Observable } from "rxjs";
import { Dates } from "../model/dates";
import {RxStomp} from "@stomp/rx-stomp";
import * as SockJS from 'sockjs-client';
import {map} from "rxjs/operators";
//import { BoatDataComponent } from '../boat-data/boat-data.component';

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
  

  constructor(private dataService: BoatDataService
    //, 
    //private boatDataComponent: BoatDataComponent
    ) {
    this.getLastDataGroupNo2();
  }

  ngOnInit(): void {
    this.getDates();
    //this.getLastDataGroup();
  
  }
  plus() {
    console.log("p");
    this.proba = this.proba.concat(" p");
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
    public async getDataById(id: number): Promise<Object> {
    console.log("getdatabyid")
    return new Promise(() => {
      this.data = this.dataService.getDataGroupById(id);
      console.log(this.data);
      //this.setGraphData();
     
    });
  }
  public  dateChanged() {
    console.log("Datechanged");
    this.dataService.getDataGroupById(this.selectedDate.name).subscribe((res) => {
      this.data = res;
    });

   // this.data = this.getDataById(this.selectedDate.name);

    //this.proba = this.selectedDate.name.toString();
  //  this.boatDataComponent.dateChanged( this.selectedDate.name.toString());
    /*console.log(this.dataService.getLastDataGroup());
    console.log("datechanged");
    this.EXPORT_URL = this.BASE_URL.concat("/").concat(
      this.selectedDate.name.toString()
    );
    this.selectedDate = */
    /*this.getDataById(this.selectedDate.name).then((data) => {
      var res = data;

    })
    */
  }
  /*public async getDataById(id: number): Promise<Object> {
    console.log("getdatabyid")
    return new Promise(() => {
      this.data = this.dataService.getDataGroupById(id);
      console.log(this.data);
      //this.setGraphData();
     
    });
  }
  */
  public async getLastDataGroupNo2(){
   /* this.dataService.getLastDataGroup().subscribe(
      (res) => {
        this.data = new Promise(() => res);
        console.log(res);

      });
    */
      this.dataService.getLastDataGroup().subscribe(
        (res) => {
          this.data = res;
          this.proba = this.data.id;
  
          console.log(this.data);
        });
  }
  /*public async getLastDataGroup(): Promise<Object> {
    console.log("get layt");
    return new Promise(() => {
      this.data = this.dataService.getDataGroupById(12);
      console.log("stop");

      //this.setGraphData();
    });
  }
  */
  public deleteAll() {
    this.dataService.deleteAll();
    this.getDates();

  }
  public deleteById(id: number) {
    this.dataService.deleteById(id);
    this.getDates();
    //this.getLastDataGroup();
  }
  public setShow() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
