import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'f1-championships';
  public parseData:any;
  public parsedArray = Array();
  public cacheArray = Array();
  public years:any = [];

  public selectedYear = 2005;
  public startYear = 2005;
  public loading = false;
  public tableHeaders:any = [];
  date = new Date();

  constructor(public api: ApiService){}

  ngOnInit(){
    this.getRecords(this.selectedYear);
    this.generateYears();
  }

  generateYears(){
    const currentYear = this.date.getFullYear();
    while(this.startYear <= currentYear){
      this.years.push(this.startYear);
      this.startYear++;
    }
  }

  changeSeason(event:number){
    this.selectedYear = event;
    this.getRecords(this.selectedYear);
  }

  getRecords(year: number){
    this.loading = true;

    this.parsedArray = [];
    this.api.getF1Results(year).subscribe(
      response => {
      },
      parse => {
        this.parseData = parse.error.text;
        const parser = new xml2js.Parser();
          parser.parseString(this.parseData, (err:any, result:any) => {
          result.MRData.RaceTable[0].Race.map(
            (data:any)=> {
               this.tableHeaders = ['RaceName', 'Pos', 'No', 'Driver', 'Constructor', 'Laps', 'Grid', 'Time', 'Status', 'Points'];
               this.parsedArray.push({
                raceName: data['RaceName'][0],
                pos: data['ResultsList'][0]['Result'][0]['$']['position'],
                no: data['ResultsList'][0]['Result'][0]['$']['number'],
                driver: data['ResultsList'][0]['Result'][0]['Driver'][0]['GivenName'][0], //+ FamilyName
                constructor: data['ResultsList'][0]['Result'][0]['Constructor'][0]['Name'][0],
                laps: data['ResultsList'][0]['Result'][0]['Laps'][0],
                grid: data['ResultsList'][0]['Result'][0]['Grid'][0],
                time: data['ResultsList'][0]['Result'][0]['Time'][0]['_'],
                status: data['ResultsList'][0]['Result'][0]['Status'][0]['_'],
                points: data['ResultsList'][0]['Result'][0]['$']['points'],
              })
            }
          )
          this.cacheArray = this.parsedArray;
        })
      }
    )

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
