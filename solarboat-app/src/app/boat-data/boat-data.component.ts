import { Component, OnInit, Output, NgModule, Input, OnDestroy } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
import { interval, Subscription } from "rxjs";
import { Dates } from "../model/dates";
import {RxStomp} from "@stomp/rx-stomp";
import * as SockJS from 'sockjs-client';
import {map} from "rxjs/operators";

@Component({
  selector: "app-boat-data",
  templateUrl: "./boat-data.component.html",
  styleUrls: ["./boat-data.component.css"],
})
export class BoatDataComponent implements OnInit, OnDestroy {
  @Output() public tilt;
  @Output() public compass;
  @Output() public acceleration;
  @Output() public battery;
  @Output() public motor;
  @Output() public soc;
  @Output() public temp;
  @Output() public temp_soc;
  @Output() public errors;
  @Output() dates: Dates[] = [];
  @Input() selectedDate: Dates;
  subscription: Subscription;
  source = interval(10000);
  BASE_URL = "http://localhost:8080/api/dataGroup/export";
  EXPORT_URL = this.BASE_URL;
  show = false;
  showDetails = false;
  data;
  private client: RxStomp;


  constructor(private dataService: BoatDataService) {}

  ngOnInit() {
    // this.subscription = this.source.subscribe((val) => this.makeGraphs());
    this.getLastDataGroup();
    this.getDates();
    this.connectClicked();
    this.startClicked();
  }
  ngOnDestroy(){
    this.stopClicked();
    this.disconnectClicked();
  }

  //NOTIFICATIONS
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
       
          return data;
        }))
      .subscribe((data: string) =>  this.addGraphData(data));
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

  //GRAPH
  public setShow() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  public setShowDetails() {
    if (this.showDetails == false) {
      this.showDetails = true;
    } else {
      this.showDetails = false;
    }
  }
  public dateChanged() {
    this.EXPORT_URL = this.BASE_URL.concat("/").concat(
      this.selectedDate.name.toString()
    );
    this.getDataById(this.selectedDate.name).then((data) => {
      var res = data;
      console.log(this.client);
      console.log(res);
      if(this.client == null && this.data.isLast){
        this.connectClicked();
        this.startClicked();
      }
      if(this.client != null && !this.data.isLast){
        this.stopClicked();
        this.disconnectClicked()
      }
    })
   
  }

  public async getDataById(id: number): Promise<Object> {
    return new Promise(() => {
      this.data = this.dataService.getDataGroupById(id);
      this.setGraphData();
     
    });
  }
  public async getLastDataGroup(): Promise<Object> {
    return new Promise(() => {
      this.data = this.dataService.getLastDataGroup();

      this.setGraphData();
    });
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
  public deleteAll() {
    this.dataService.deleteAll();
    this.getDates();
  }
  public deleteById(id: number) {
    this.dataService.deleteById(id);
    this.getDates();
    this.getLastDataGroup();
  }

  public addGraphData(newData) {
    console.log(newData.battery[2][0]);
    this.setColor(newData.battery[2][0].value, newData.battery[3][0].value);
    this.tilt.multi[0].series.push(newData.tilt[0][0]);
    this.tilt.multi[1].series.push(newData.tilt[1][0]);
    this.tilt.multi[2].series.push(newData.tilt[2][0]);
    this.tilt.multi = [...this.tilt.multi];

    this.compass.multi[0].series.push(newData.compass[0][0]);
    this.compass.multi[1].series.push(newData.compass[1][0]);
    this.compass.multi[2].series.push(newData.compass[2][0]);
    this.compass.multi = [...this.compass.multi];

    this.acceleration.multi[0].series.push(newData.acceleration[0][0]);
    this.acceleration.multi[1].series.push(newData.acceleration[1][0]);
    this.acceleration.multi[2].series.push(newData.acceleration[2][0]);
    this.acceleration.multi = [...this.acceleration.multi];

    this.battery.multi[0].series.push(newData.battery[0][0]);
    this.battery.multi[1].series.push(newData.battery[1][0]);
    this.battery.multi = [...this.battery.multi];

    this.motor.multi[0].series.push(newData.motor[0][0]);
    this.motor.multi[1].series.push(newData.motor[1][0]);
    this.motor.multi = [...this.motor.multi];

    this.temp_soc.multi[0].series.push(newData.battery[0][0]);
    this.temp_soc.multi[1].series.push(newData.battery[1][0]);
    this.temp_soc.multi = [...this.temp_soc.multi];

    this.soc.multi[0].value = (newData.battery[2][0].value);
    this.soc.multi = [...this.soc.multi];

    this.temp.multi[0].value = (newData.battery[3][0].value);
    this.temp.multi = [...this.temp.multi];
  }

  onResize(event) {
    this.tilt.view = [event.target.innerWidth / 1.15, 250];
    this.compass.view = [event.target.innerWidth / 1.15, 250];
    this.acceleration.view = [event.target.innerWidth / 1.15, 250];
    this.battery.view = [event.target.innerWidth / 1.15, 250];
    this.motor.view = [event.target.innerWidth / 1.15, 250];
    this.temp_soc.view = [event.target.innerWidth / 1.15, 250];
    


}

  public setGraphData() {
    var res;
    this.data.toPromise().then((data) => {
      res = data;
      this.setColor(
        res.battery[3][res.battery[3].length - 1].value,
        res.battery[2][res.battery[2].length - 1].value
      );
      this.tilt = {
        multi: [
          {
            name: "x",
            series: res.tilt[0],
          },

          {
            name: "y",
            series: res.tilt[1],
          },
          {
            name: "z",
            series: res.tilt[2],
          },
        ],
        view: [1000, 250],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "data",
        timeline: true,
        colorScheme: {
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        },
        autoScale: true,
        legendTitle: "Tilt",
      };

      this.compass = {
        multi: [
          {
            name: "x",
            series: res.compass[0],
          },

          {
            name: "y",
            series: res.compass[1],
          },
          {
            name: "z",
            series: res.compass[2],
          },
        ],
        view: [1000, 250],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "data",
        timeline: true,
        colorScheme: {
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        },
        autoScale: true,
        legendTitle: "Compass",
      };

      this.acceleration = {
        multi: [
          {
            name: "x",
            series: res.acceleration[0],
          },

          {
            name: "y",
            series: res.acceleration[1],
          },
          {
            name: "z",
            series: res.acceleration[2],
          },
        ],
        view: [1000, 250],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "data",
        timeline: true,
        colorScheme: {
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        },
        autoScale: true,
        legendTitle: "Acceleration",
      };

      this.battery = {
        multi: [
          {
            name: "in",
            series: res.battery[0],
          },

          {
            name: "out",
            series: res.battery[1],
          },
        ],
        view: [1000, 250],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "data",
        timeline: true,
        colorScheme: {
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        },
        autoScale: true,
        legendTitle: "Battery",
      };

      this.motor = {
        multi: [
          {
            name: "RpM",
            series: res.motor[0],
          },

          {
            name: "Temperature",
            series: res.motor[1],
          },
        ],
        view: [1000, 250],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "data",
        timeline: true,
        colorScheme: {
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        },
        autoScale: true,
        legendTitle: "Motor",
      };
      this.temp_soc = {
        multi: [
          {
            name: "SoC",
            series: res.battery[2],
          },

          {
            name: "temp",
            series: res.battery[3],
          },
        ],
        view: [1000, 250],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "data",
        timeline: true,
        colorScheme: {
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        },
        autoScale: true,
        legendTitle: "Battery",
      };
      this.soc = {
        multi: [
          {
            name: "SoC",
            value: res.battery[2][res.battery[2].length - 1].value,
          },
        ],
        view: [200, 300],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: false,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "data",
        timeline: false,
        yScaleMax: 100,
        colorScheme: {
          domain: this.socColor,
        },

        legend: false,
      };
      this.temp = {
        multi: [
          {
            name: "Temperature",
            value: res.battery[3][res.battery[3].length - 1].value,
          },
        ],
        view: [200, 300],
        showXAxis: false,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: false,
        xAxisLabel: "Number",
        showYAxisLabel: true,
        yAxisLabel: "°C",
        timeline: false,
        yScaleMax: 80,
        colorScheme: {
          domain: this.tempColor,
        },
        legend: false,
      };
      this.errors = res.errors;
    });
  }
  public setColor(temp: number, soc: number) {
    if (temp < 60) {
      this.tempColor = ["#CDDC39"];
    } else {
      this.tempColor = ["#E91E63"];
    }
    if (soc < 80) {
      this.socColor = ["#CDDC39"];
    } else {
      this.socColor = ["#E91E63"];
    }
  }
  tempColor;
  socColor;
}
