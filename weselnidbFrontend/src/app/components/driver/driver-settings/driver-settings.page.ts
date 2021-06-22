import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-driver-settings',
  templateUrl: './driver-settings.page.html',
  styleUrls: ['./driver-settings.page.scss'],
})
export class DriverSettingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('name');
    this.navCtrl.navigateBack("driver");
  }
}
