import { Component, OnInit, Output, NgModule, Input } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
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
  subscription: Subscription;
  source = interval(10000);
  @Output() dates: Dates[] = [];
  @Input() selectedDate: Dates;

  constructor(private dataService: BoatDataService) {}

  ngOnInit() {
    // this.subscription = this.source.subscribe((val) => this.makeGraphs());
    this.lastDataGroup();
    //this.getDataById(1);
    this.getDates();
    this.dataService.exportDataById(1);
  }

  public exportById(id: number) {
    console.log("letöltés");
    this.dataService.exportDataById(id);
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
        console.log(this.dates);
      },
      (err) => {
        alert("get error");
      }
    );
  }

  public setGraphData(getData) {
    var res;
    getData.toPromise().then((data) => {
      res = data;
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
        view: [700, 400],
        showXAxis: true,
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
        view: [700, 400],
        showXAxis: true,
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
        view: [700, 400],
        showXAxis: true,
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
        view: [700, 400],
        showXAxis: true,
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
        view: [700, 400],
        showXAxis: true,
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
      this.soc = {
        multi: [
          {
            name: "SoC",
            value: res.battery[2][res.battery[2].length - 1].value,
          },
        ],
        view: [200, 400],
        showXAxis: true,
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
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
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
        view: [200, 400],
        showXAxis: true,
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
          domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        },

        legend: false,
      };
    });
  }
  public color(num: number) {
    if (num < 50) {
      return ["E91E63"];
    } else ["CDDC39"];
  }
}
