import {
  Component,
  Injectable,
  OnInit,
  Output,
  NgModule,
  Input,
  OnDestroy,
  EventEmitter,
} from "@angular/core";
import { BoatDataService } from "../boat-data.service";
import { ChartModel } from "../model/chart-model";
import { NotificationsService } from "../notifications.service";
@Component({
  selector: "app-boat-data",
  templateUrl: "./boat-data.component.html",
  styleUrls: ["./boat-data.component.css"],
})
export class BoatDataComponent implements OnInit {
  @Output() public tilt;
  @Output() public compass;
  @Output() public velocity;
  @Output() public acceleration;
  @Output() public battery;
  @Output() public motor;
  @Output() public soc;
  @Output() public temp;
  @Output() public temp_soc;
  @Output() public errors;
  @Output() public accelerationStatistics;
  @Output() public tiltStatistics;
  @Output() public compassStatistics;
  @Output() public batteryInOutStatistics;
  @Output() public batteryTempSoCStatistics;
  @Output() public motorStatistics;
  @Input() showStatistics;
  @Input() isActive: boolean;
  @Output() isActiveChange = new EventEmitter();
  BASE_URL = "http://localhost:8080/api/dataGroup/export";
  EXPORT_URL = this.BASE_URL;
  show = false;
  showDetails = false;

  tempColor  = ["#CDDC39"];
  socColor  = ["#CDDC39"];
  @Input("data")
  set dataGroup(dataGroup) {
    if (dataGroup) {
      if (this.tilt) {
        this.addGraphData(dataGroup);
      } else {
        this.setGraphData(dataGroup);
      }    
      this.onResize(null);
      console.log(this.showStatistics);
      console.log(this.batteryTempSoCStatistics);
    }
  }
  
  
  constructor(private notifService: NotificationsService) {
    this.notifService.dataCallback$.subscribe((data) => {
      this.dataCallbackFunction(data);
    });
    this.notifService.activityCallback$.subscribe((data) => {
      this.activityCallbackFunction(data);
    });
  }
  dataCallbackFunction(data) {
    if (this.tilt) {
      this.addGraphData(data);
    } else {
      this.setGraphData(data);
    }
  }
  activityCallbackFunction(data) {
    this.isActive = data;
    this.isActiveChange.emit(this.isActive);
  }
  ngOnInit() {
  }
  public setActive() {
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive);
  }
  //GRAPH
  public setShowDetails() {
    if (this.showDetails == false) {
      this.showDetails = true;
    } else {
      this.showDetails = false;
    }
    console.log(this.showDetails);

  }

  public addGraphData(newData) {
    if (this.tilt) {
      if (newData.id) {

        this.setColor(newData.battery[2][0].value, newData.battery[3][0].value);
        this.tilt.multi[0].series.push(newData.tilt[0][0]);
        this.tilt.multi[1].series.push(newData.tilt[1][0]);
        this.tilt.multi[2].series.push(newData.tilt[2][0]);
        this.tilt.multi = [...this.tilt.multi];

        /*this.compass.multi[0].series.push(newData.compass[0][0]);
        this.compass.multi[1].series.push(newData.compass[1][0]);
        this.compass.multi[2].series.push(newData.compass[2][0]);*/
        this.compass = (newData.compass.length > 0) ? newData.compass[newData.compass.length - 1] : {x:0, y:0, z:0};
        this.velocity = (newData.velocity.length > 0) ? newData.velocity[newData.velocity.length - 1] : {x:0, y:0, z:0};

        //this.compass = [...this.compass];

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

        this.soc.multi[0].value = newData.battery[2][0].value;
        this.soc.multi = [...this.soc.multi];

        this.temp.multi[0].value = newData.battery[3][0].value;
        this.temp.multi = [...this.temp.multi];
      }
    } else {
      this.setGraphData(newData);
    }
  }

  onResize(event) {
    if (this.tilt) {
      this.tilt.view = [window.innerWidth / 2.7, 250];
      //this.compass.view = [window.innerWidth / 2.7, 250];
      this.acceleration.view = [window.innerWidth / 2.7, 250];
      this.battery.view = [window.innerWidth / 2.7, 250];
      this.motor.view = [window.innerWidth / 2.7, 250];
      this.temp_soc.view = [window.innerWidth / 2.7, 250];
    }
  }

  public setGraphData(data) {
    if(data.id){
      this.isActive = true;
      this.isActiveChange.emit(this.isActive);    }

    //var this.data = this.data;
    this.accelerationStatistics = data.accelerationAnalysis;
    this.tiltStatistics = data.tiltAnalysis;
   // this.compassStatistics = data.compassAnalysis;
    this.accelerationStatistics = data.accelerationAnalysis;
    this.batteryInOutStatistics = [
      data.batteryAnalysis[0],
      data.batteryAnalysis[1],
    ];
    this.batteryTempSoCStatistics = [
      data.batteryAnalysis[2],
      data.batteryAnalysis[3],
    ];
    this.motorStatistics = data.motorAnalysis;
    this.setColor(
      data.battery[3][data.battery[3].length - 1].value,
      data.battery[2][data.battery[2].length - 1].value
    );
    
    this.tilt = {
      multi: [
        {
          name: "STATISTICS.x",
          series: data.tilt[0],
        },

        {
          name: "STATISTICS.y",
          series: data.tilt[1],
        },
        {
          name: "STATISTICS.z",
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
      legendTitle: "STATISTICS.tilt",
      yScaleMax: 80,
      legend: false,
    };

    /*this.compass = {
      multi: [
        {
          name: "STATISTICS.x",
          series: data.compass[0],
        },

        {
          name: "STATISTICS.y",
          series: data.compass[1],
        },
        {
          name: "STATISTICS.z",
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
      legendTitle: "STATISTICS.compass",
      yScaleMax: 80,
      legend: false,
    };
    */
   this.compass = (data.compass.length > 0) ? data.compass[data.compass.length - 1] : {x:0, y:0, z:0};
   this.velocity = (data.velocity.length > 0) ? data.velocity[data.velocity.length - 1] : {x:0, y:0, z:0};


   

    this.acceleration = {
      multi: [
        {
          name: "STATISTICS.x",
          series: data.acceleration[0],
        },

        {
          name: "STATISTICS.y",
          series: data.acceleration[1],
        },
        {
          name: "STATISTICS.z",
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
      legendTitle: "STATISTICS.acceleration",
      yScaleMax: 80,
      legend: false,
    };

    this.battery = {
      multi: [
        {
          name: "STATISTICS.batteryIn",
          series: data.battery[0],
        },

        {
          name: "STATISTICS.batteryOut | translate",
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
      legendTitle: "STATISTICS.battery",
      yScaleMax: 80,
      legend: false,
    };

    this.motor = {
      multi: [
        {
          name: "STATISTICS.motorRpM",
          series: data.motor[0],
        },

        {
          name: "STATISTICS.motorTemp",
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
      legendTitle: "STATISTICS.motor",
      yScaleMax: 80,
      legend: false,
    };
    this.temp_soc = {
      multi: [
        {
          name: "STATISTICS.batterySoC",
          series: data.battery[2],
        },

        {
          name: "STATISTICS.batteryTemp",
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
      legendTitle: "STATISTICS.battery",
      yScaleMax: 80,
      legend: false,
    };
    this.soc = {
      multi: [
        {
          name: "STATISTICS.batterySoC",
          value: (data.battery[2][0]  ? (data.battery[2][data.battery[2].length - 1].value) : 0),
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
      legendTitle: "STATISTICS.battery",
    };
    this.temp = {
      multi: [
        {
          name: "STATISTICS.batteryTemp",
          value: (data.battery[3][0] ? (data.battery[3][data.battery[3].length - 1].value) : 0 ),
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
      legendTitle: "STATISTICS.battery",
    };
    this.errors = data.errors;

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

}
