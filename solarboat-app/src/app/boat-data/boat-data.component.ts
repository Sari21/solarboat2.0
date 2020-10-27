import { Component, Injectable, OnInit, Output, NgModule, Input, OnDestroy } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
import { ChartModel } from '../model/chart-model';
import { NotificationsService } from '../notifications.service'
@Component({
  selector: "app-boat-data",
  templateUrl: "./boat-data.component.html",
  styleUrls: ["./boat-data.component.css"],
})
export class BoatDataComponent implements OnInit {
  @Output() public tilt;
  @Output() public compass;
  @Output() public acceleration;
  @Output() public battery;
  @Output() public motor;
  @Output() public soc;
  @Output() public temp; 
  @Output() public temp_soc;
  @Output() public errors;
  private _data;
  @Input('data') 
  set data(data){
    if(data){
      this.setGraphData(data);
      this.addGraphData(data);
      this._data = data;
      console.log(this.tilt);
    }
   
   // data.subscribe(() =>  { this._data = data; this.setGraphData();} );
    //this.setGraphData();
    //console.log(this.data);
  
    
  }
  get proba(): string{return this._data};
  BASE_URL = "http://localhost:8080/api/dataGroup/export";
  EXPORT_URL = this.BASE_URL;
  show = false;
  showDetails = false;


  constructor(private dataService: BoatDataService, private notifService:  NotificationsService) {
    this.notifService.eventCallback$.subscribe(data => {
      this.callbackFunction(data);
  });
  }
  callbackFunction(data)
  {
    this.addGraphData(data);
    console.log("Inside MyComponent")
  }
  ngOnInit() {
    // this.subscription = this.source.subscribe((val) => this.makeGraphs());
    //this.getLastDataGroup();
    //this.getDates();
    //this.connectClicked();
    //this.startClicked();
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

  public addGraphData(newData) {
    console.log(newData);
    console.log(this.tilt);
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

  public setGraphData(data) {
    //var this.data = this.data;
      this.setColor(
        data.battery[3][data.battery[3].length - 1].value,
        data.battery[2][data.battery[2].length - 1].value
      );
      this.tilt = {
        multi: [
          {
            name: "x",
            series: data.tilt[0],
          },

          {
            name: "y",
            series: data.tilt[1],
          },
          {
            name: "z",
            series: data.tilt[2],
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
        yScaleMax:80,
        legend:false,
      };

      this.compass = {
        multi: [
          {
            name: "x",
            series: data.compass[0],
          },

          {
            name: "y",
            series: data.compass[1],
          },
          {
            name: "z",
            series: data.compass[2],
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
        yScaleMax:80,
        legend:false,
      };

      this.acceleration = {
        multi: [
          {
            name: "x",
            series: data.acceleration[0],
          },

          {
            name: "y",
            series: data.acceleration[1],
          },
          {
            name: "z",
            series: data.acceleration[2],
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
        yScaleMax:80,
        legend:false,
      };

      this.battery = {
        multi: [
          {
            name: "in",
            series: data.battery[0],
          },

          {
            name: "out",
            series: data.battery[1],
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
        yScaleMax:80,
        legend:false,
      };

      this.motor = {
        multi: [
          {
            name: "RpM",
            series: data.motor[0],
          },

          {
            name: "Temperature",
            series: data.motor[1],
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
        yScaleMax:80,
        legend:false,
      };
      this.temp_soc = {
        multi: [
          {
            name: "SoC",
            series: data.battery[2],
          },

          {
            name: "temp",
            series: data.battery[3],
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
        yScaleMax:80,
        legend:false,
      };
      this.soc = {
        multi: [
          {
            name: "SoC",
            value: data.battery[2][data.battery[2].length - 1].value,
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
        autoScale: true,
        legendTitle: "Battery",
      };
      this.temp = {
        multi: [
          {
            name: "Temperature",
            value: data.battery[3][data.battery[3].length - 1].value,
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
        autoScale: true,
        legendTitle: "Battery",
      };
      this.errors = data.errors;
  //  });
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
