import { Component } from "@angular/core";

@Component({
  selector: "app-new-graph",
  templateUrl: "./new-graph.component.html",
  styleUrls: ["./new-graph.component.css"],
})
export class NewGraphComponent {
  public multi = [
    {
      name: "India",
      series: [
        {
          name: "2009",
          value: 7500000,
        },
        {
          name: "2010",
          value: 8948000,
        },
      ],
    },

    {
      name: "USA",
      series: [
        {
          name: "2009",
          value: 7874000,
        },
        {
          name: "2010",
          value: 8276000,
        },
      ],
    },
    {
      name: "Singapur",
      series: [
        {
          name: "2009",
          value: 5004002,
        },
        {
          name: "2010",
          value: 5804000,
        },
      ],
    },
  ];
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Number";
  showYAxisLabel = true;
  yAxisLabel = "data";
  timeline = true;
  colorScheme = {
    domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
  };
}
