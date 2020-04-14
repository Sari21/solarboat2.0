import { Component, OnInit, Output, NgModule } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
import * as CanvasJS from "../../../canvasjs.min";
import { TiltGraphComponent } from "../tilt-graph/tilt-graph.component";
import { AccelerationGraphComponent } from "../acceleration-graph/acceleration-graph.component";
import { CompassGraphComponent } from "../compass-graph/compass-graph.component";

@Component({
  selector: "app-boat-data",
  templateUrl: "./boat-data.component.html",
  styleUrls: ["./boat-data.component.css"],
})
export class BoatDataComponent implements OnInit {
  @Output() public tilt;
  @Output() public compass;
  @Output() public acceleration;
  constructor(private dataService: BoatDataService) {}

  ngOnInit() {
    this.makeGraphs();
  }
  public async makeGraphs(): Promise<Object> {
    return new Promise((vmi) => {
      var getData = this.dataService.getLastDataGroupTilt();
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
          title: "Tilt",
        };
      });

      getData.toPromise().then((data) => {
        res = data;
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
          title: "Compass",
        };
      });
      getData.toPromise().then((data) => {
        res = data;
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
          title: "Compass",
        };
      });

      //this.tiltComp.printGraph(res.tilt);
      //this.accCopm.printGraph(res.acceleration);
      // this.compComp.printGraph(res.compass);
    });
  }
}
