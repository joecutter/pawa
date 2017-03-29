import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../page1/page1";

@Component({
  selector: 'page-page2',
  templateUrl: 'slides.html'
})
export class SlidesPage {



    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.navHome();

  }

    navHome() {
        this.navCtrl.setRoot(HomePage);
      }

  }
