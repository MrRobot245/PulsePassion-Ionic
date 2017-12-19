import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
	item=this.navParams.get('paramItem');
constructor(public navCtrl: NavController,public navParams: NavParams) {
console.log(this.navParams.get('paramItem'));

// console.log(title);
  }

}
