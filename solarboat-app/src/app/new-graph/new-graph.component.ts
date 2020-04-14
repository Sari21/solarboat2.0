import { Component, Input } from "@angular/core";

@Component({
  selector: "app-new-graph",
  templateUrl: "./new-graph.component.html",
  styleUrls: ["./new-graph.component.css"],
})
export class NewGraphComponent {
  @Input() public datas: Object;
}
