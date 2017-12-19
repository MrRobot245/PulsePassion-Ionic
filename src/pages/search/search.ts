import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemPage } from '../item/item';

import * as papa from 'papaparse';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	csvData: any[] = [];
 headerRow: any[] = [];
  constructor(public navCtrl: NavController,public navParams: NavParams, private http: Http) {
this.readCsvData(this.navParams.get('paramSearch'));
}
private readCsvData(search:string) {
  this.http.get('assets/DB.csv')
	.subscribe(
	data => this.extractData(data,search),
	err => this.handleError(err)
	);

}

private extractData(res,search) {
  let csvData = res['_body'] || '';
  let parsedData = papa.parse(csvData).data;
  this.headerRow = parsedData[0];
  parsedData.splice(0, 1);
  parsedData.sort();
 let filteredData=[];
  let i=0;
  var found=true;
  for(i=0; i< parsedData.length;i++)
  {
	  // console.log(parsedData[i][0]);
	  var entry=parsedData[i][0].toLowerCase();

	   found = entry.includes(search.toLowerCase());
	   if(found===true)
	   {
		   // console.log("Found "+parsedData[i][0]);
		   filteredData.push(parsedData[i]);
	   }
  }
  // console.log(origLen);
  // console.log(filteredData);

  this.csvData = filteredData;
}
private handleError(err) {
console.log('something went wrong: ', err);
}
goProduct(item){
	this.navCtrl.push(ItemPage,{
		 paramItem:item
	});

}

trackByFn(index: any, item: any) {
return index;
}

}
