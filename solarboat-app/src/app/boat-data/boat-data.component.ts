import { Component, OnInit } from "@angular/core";
import { BoatDataService } from "../boat-data.service";
//import * as CanvasJS from "../../../canvasjs.min";
import { TiltGraphComponent } from "../tilt-graph/tilt-graph.component";
import { AccelerationGraphComponent } from "../acceleration-graph/acceleration-graph.component";
import { CompassGraphComponent } from "../compass-graph/compass-graph.component";

@Component({
  selector: "app-boat-data",
  templateUrl: "./boat-data.component.html",
  styleUrls: ["./boat-data.component.css"],
})
export class BoatDataComponent implements OnInit {
  constructor(
    private dataService: BoatDataService,
    private tiltComp: TiltGraphComponent,
    private accCopm: AccelerationGraphComponent,
    private compComp: CompassGraphComponent
  ) {}

  ngOnInit() {
    this.makeGraphs();
  }
  public makeGraphs() {
    var datas = this.dataService.getLastDataGroupTilt();
    var res;
    var tilt = [];

    datas.toPromise().then((data) => {
      res = data;
      this.tiltComp.printGraph(res.tilt);
      this.accCopm.printGraph(res.acceleration);
      this.compComp.printGraph(res.compass);
    });
  }
}
