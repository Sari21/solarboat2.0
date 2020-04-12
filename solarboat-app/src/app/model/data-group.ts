import { BoatData } from "./boat-data";
import { MyCoordinates } from "./my-coordinates";

export class DataGroup {
  id: Number;
  boatDataList: BoatData[] = [];
  date: Date;

  public getTilts(): MyCoordinates[] {
    var tilts: MyCoordinates[] = [];
    this.boatDataList.forEach((data) => {
      tilts.push(data.tilt);
    });
    return null;
  }
}
