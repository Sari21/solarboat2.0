import {
  Component,
  OnInit,
  Output,
  NgModule,
  Input,
  OnDestroy,
} from "@angular/core";
import { BoatDataService } from "../boat-data.service";
import { Dates } from "../model/dates";
import { NotificationsService } from "../notifications.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
  selector: "app-data-visualization",
  templateUrl: "./data-visualization.component.html",
  styleUrls: ["./data-visualization.component.css"],
})
export class DataVisualizationComponent implements OnInit {
  @Output() dates: Dates[] = [];
  @Input() selectedDate: Dates;
  private _isActive;
  @Input("isActive")
  @Output("isActive")
  set isActive(isActive) {
    this._isActive = isActive;
    if (isActive) {
      this.getActiveDataGroup();
    }
  }
  get isActive() {
    return this._isActive;
  }
  BASE_URL = "http://localhost:8080/api/dataGroup/export";
  EXPORT_URL = this.BASE_URL;
  data;
  show = false;
  showDetails = false;
  proba;
  @Input() selectedTabIndex;
  // private boatIsActive: Boolean;

  constructor(
    private dataService: BoatDataService,
    //   private notifications: NotificationsRxComponent
    private notifications: NotificationsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getDates();
    this.isActive = true;
    //this.getActiveDataGroup();
    this.connect();
  }
  ngOnDestroy() {
    this.disconnect();
  }

  public async getDates() {
    this.dataService.getDate().subscribe(
      (res) => {
        this.dates = res;
        this.selectedDate = res[res.length - 1];
        console.log(res);
      },
      (err) => {
        alert("get error");
      }
    );
  }
  public change(e) {
    this.isActive = e;
  }

  public connect() {
      this.notifications.connect();
      this.notifications.startListening();
    
  }
  public disconnect() {
    //if(this.notifications.isConnected()){
    this.notifications.stopListening();
    this.notifications.disconnect();
    // }
  }
  public getLastClosedDataGroup() {
    this.dataService.getLastClosedDataGroup().subscribe((res) => {
      this.data = res;
    });
  }
  public getActiveDataGroup() {
    this.dataService.getActiveDataGroup().subscribe((res) => {
      if(res == null){
        this.data = null;
        this.isActive = false;
      }
      else{
       // this.isActive = true;
      }
      this.data = res;
      
    });
  }
  public dateChanged() {
    this.dataService
      .getDataGroupById(this.selectedDate.name)
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }

  public deleteAll() {
    this.dataService.deleteAll();
    this.getDates();
  }
  public deleteById(id: number) {
    this.dataService.deleteById(id);
    this.getDates();
    this.getLastClosedDataGroup();
  }
  openDeleteOneConfirmDialog(id) {
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteById(id);
      }
    });
  }
  openDeleteAllConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteAll();
      }
    });
  }
  public setShow() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  onTabChanged() {
    if (this.selectedTabIndex === 0) {
      this.getActiveDataGroup();
      this.connect();
    } else {
      this.disconnect();
      this.getDates();
      this.getLastClosedDataGroup();
    }
  }

}
