import { Component, OnInit, Output, NgModule, Input } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
//import * as CanvasJS from "../../../canvasjs.min";
import { TiltGraphComponent } from "../tilt-graph/tilt-graph.component";
import { AccelerationGraphComponent } from "../acceleration-graph/acceleration-graph.component";
import { CompassGraphComponent } from "../compass-graph/compass-graph.component";
import { interval, Subscription } from "rxjs";
import { Dates } from "../model/dates";

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
  @Output() dates: Dates[] = [];
  @Input() selectedDate: Dates;
  subscription: Subscription;
  source = interval(10000);
  BASE_URL = "http://localhost:8080/api/dataGroup/export";
  EXPORT_URL = this.BASE_URL;
  show = false;
  showDetails = false;

  constructor(private dataService: BoatDataService) {}

  ngOnInit() {
    // this.subscription = this.source.subscribe((val) => this.makeGraphs());
    this.lastDataGroup();
    //this.getDataById(1);
    this.getDates();
  }
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
    this.getDataById(this.selectedDate.name);
    var table = document.getElementById("errorTable");
    table.remove();
    document.getElementById("firstrow").appendChild(table);
  }

  public async getDataById(id: number): Promise<Object> {
    return new Promise(() => {
      var getData = this.dataService.getDataGroupById(id);
      this.setGraphData(getData);
    });
  }
  public async lastDataGroup(): Promise<Object> {
    return new Promise(() => {
      var getData = this.dataService.getLastDataGroup();

      this.setGraphData(getData);
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
    console.log(id);
    this.dataService.deleteById(id);
    this.getDates();
  }

  public setGraphData(getData) {
    var res;
    getData.toPromise().then((data) => {
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
