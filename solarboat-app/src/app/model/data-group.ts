import { BoatData } from "./boat-data";
import { MyCoordinates } from "./my-coordinates";

export class DataGroup {
  id: Number;
  boatDataList: BoatData[] = [];
  date: Date;

  public getTilts(): MyCoordinates[] {
    var tilts = [];
    var x = [];
    var y = [];
    var z = [];
    for (var i = 0; i < this.boatDataList.length; i++) {
      x.push(this.boatDataList[i].tilt.getX());
      y.push(this.boatDataList[i].tilt.getY());
      z.push(this.boatDataList[i].tilt.getZ());
    }
    tilts.push(x, y, z);
    return tilts;
  }
}
