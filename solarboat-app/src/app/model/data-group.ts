import { BoatData } from "./boat-data";
import { MyCoordinates } from "./my-coordinates";

export class DataGroup {
  id: Number;
  boatDataList: BoatData[] = [];
  date: Date;

  public getTilts(): MyCoordinates[] {
    console.log(this.boatDataList);
    var tilts = [];
    var x = [];
    var y = [];
    var z = [];
    console.log(this.boatDataList.length);
    for (var i = 0; i < this.boatDataList.length; i++) {
      x.push(this.boatDataList[i].tilt.getX());
      y.push(this.boatDataList[i].tilt.getY());
      z.push(this.boatDataList[i].tilt.getZ());
      console.log("hali");
    }
    /* this.boatDataList.forEach((data) => {
      console.log("valami");
      //tilts.push(data.tilt);
      x.push(data.tilt.getX());
      y.push(data.tilt.getY());
      z.push(data.tilt.getZ());
    });*/
    tilts.push(x, y, z);
    console.log(tilts);
    return tilts;
  }
}
