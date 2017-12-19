import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
 this.navCtrl = navCtrl;
  }

  searchItem(searchquery:string){
  this.navCtrl.push(SearchPage,{
	   paramSearch: searchquery
  });
}

}
