import { Component, OnInit } from "@angular/core";
import * as CanvasJS from "../../../canvasjs.min";
import { HttpClient } from "@angular/common/http";
import { BoatDataService } from "../boat-data.service";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"],
})
export class GraphComponent implements OnInit {
  constructor(private http: HttpClient, private dataService: BoatDataService) {}
  datax = [];
  datay = [];
  dataz = [];

  ngOnInit() {
    this.getLastData();
    this.getDataById();
    var chart = new CanvasJS.Chart("chartContainer", {
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
          name: "San Fransisco",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###k",
          dataPoints: [
            { x: 2, y: 850 },
            { x: 3, y: 889 },
            { x: 4, y: 890 },
            { x: 5, y: 899 },
            { x: 6, y: 903 },
            { x: 7, y: 925 },
            { x: 8, y: 899 },
          ],
        },
        {
          type: "line",
          axisYType: "secondary",
          name: "Manhattan",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###k",
          dataPoints: [
            { x: 2, y: 1200 },
            { x: 3, y: 1200 },
            { x: 4, y: 1190 },
            { x: 5, y: 1180 },
            { x: 6, y: 1250 },
            { x: 7, y: 1270 },
            { x: 8, y: 1300 },
          ],
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
  public getLastData() {
    console.log(this.dataService.getLastDataGroup());
  }
  public getDataById() {
    console.log(this.dataService.getDataGroupById(2));
  }
}
