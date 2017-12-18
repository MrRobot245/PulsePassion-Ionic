import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
	searchItem(query=this.searchquery){
		console.log(query);
  // this.nav.push(SearchPage);
}

}
