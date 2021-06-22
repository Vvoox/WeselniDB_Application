import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  driver(){
    this.navCtrl.navigateForward('driver');
  }
  client(){
    this.navCtrl.navigateForward('client');
  }

}
