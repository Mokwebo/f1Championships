import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data:any = [];
  @Input() headers:any;

  private driverArray:any = [];
  public wonMultipleArray:any = [];
  private wonObj:any = {};
  public tableHeaders:any;

  constructor() { }

  ngOnInit(): void {
    this.tableHeaders = this.headers;

    this.data.map(
      (data:any) => {
        this.driverArray.push(data.driver);
      }
    )

    const counts:any = {};
    this.driverArray.forEach(function (x:any) { counts[x] = (counts[x] || 0) + 1; });
    this.wonObj = counts;

    this.data.map((data:any, key:any)=>{
        const counter = this.wonObj[data.driver];
        
        if(counter > 1){
          this.wonMultipleArray.push({
            constructor: data.constructor,
            driver: data.driver,
            grid: data.grid,
            laps: data.laps,
            no: data.no,
            points: data.points,
            pos: data.pos,
            raceName: data.raceName,
            status: data.status,
            time: data.time,
            highlight: true
          });
        } else {
          this.wonMultipleArray.push({
            constructor: data.constructor,
            driver: data.driver,
            grid: data.grid,
            laps: data.laps,
            no: data.no,
            points: data.points,
            pos: data.pos,
            raceName: data.raceName,
            status: data.status,
            time: data.time,
            highlight: false
          });
        }
    });
  }
}
