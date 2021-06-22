import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
})
export class DriverProfilePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  uploadProfileImage() {

  }

  deleteProfileImage() {

  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('name');
    this.navCtrl.navigateBack("driver");
  }
}
