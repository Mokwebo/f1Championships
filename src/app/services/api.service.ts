import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public httpClient: HttpClient
  ) { }

  getF1Results(year:number){
  //  return this.httpClient.get('https://ergast.com/api/f1/'+year+'');
  return this.httpClient.get('http://ergast.com/api/f1/'+ year +'/results/1');
  //  return this.httpClient.get('https://ergast.com/api/f1?limit='+ limit + '&offset=' + offSet +'');
  }


 // http://ergast.com/api/f1/2021/results/1

  // getMoreF1Results(){
  //  this.paginationOffset += 30;
  //  return this.httpClient.get('https://ergast.com/api/f1?limit='+ this.paginationLimit + '&offset=' +this.paginationOffset+'');
  // }

  // getPreviousF1Results(){
  //   this.paginationOffset -= 30;
  //   return this.httpClient.get('https://ergast.com/api/f1?limit='+ this.paginationLimit + '&offset=' +this.paginationOffset+'');
  // }
}
