import { Component, OnInit } from "@angular/core";
import * as CanvasJS from "../../../canvasjs.min";
import { BoatDataService } from "../boat-data.service";

@Component({
  selector: "app-compass-graph",
  templateUrl: "./compass-graph.component.html",
  styleUrls: ["./compass-graph.component.css"],
})
export class CompassGraphComponent implements OnInit {
  constructor(private dataService: BoatDataService) {}
  datax;
  datay;
  dataz;

  ngOnInit() {
    // this.getLastData();
    //this.getDataById();
    this.getTilt();
  }

  public getTilt() {
    var datas = this.dataService.getLastDataGroupTilt();
    var res;

    datas.toPromise().then((data) => {
      res = data;
      this.datax = res.compass[0];
      this.datay = res.compass[1];
      this.dataz = res.compass[2];
      console.log("1" + res);
      this.printGraph();
    });
    console.log("2" + res);
  }
  public printGraph() {
    var chart = new CanvasJS.Chart("chartContainerComp", {
      title: {
        text: "iránytű",
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
          dataPoints: this.datax,
        },
        {
          type: "line",
          axisYType: "secondary",
          name: "y",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###k",
          dataPoints: this.datay,
        },
        {
          type: "line",
          axisYType: "secondary",
          name: "z",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###k",
          dataPoints: this.dataz,
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
