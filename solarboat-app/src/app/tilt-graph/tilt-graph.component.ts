import { Component, OnInit, Injectable } from "@angular/core";
import * as CanvasJS from "../../../canvasjs.min";
import { BoatDataService } from "../boat-data.service";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-tilt-graph",
  templateUrl: "./tilt-graph.component.html",
  styleUrls: ["./tilt-graph.component.css"],
})
export class TiltGraphComponent implements OnInit {
  constructor(private dataService: BoatDataService) {}

  ngOnInit() {}

  public printGraph(tilt) {
    var chart = new CanvasJS.Chart("chartContainerTilt", {
      title: {
        text: "dőlésszög",
      },
      axisX: {},
      axisY2: {
        title: "Valami",
        prefix: "$",
        suffix: "K",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries,
      },
      data: [
        {
          type: "line",
          axisYType: "secondary",
          name: "x",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###k",
          dataPoints: tilt[0],
        },
        {
          type: "line",
          axisYType: "secondary",
          name: "y",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###k",
          dataPoints: tilt[1],
        },
        {
          type: "line",
          axisYType: "secondary",
          name: "z",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###k",
          dataPoints: tilt[2],
        },
      ],
    });
    chart.render();

    function toogleDataSeries(e) {
      if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }
}
