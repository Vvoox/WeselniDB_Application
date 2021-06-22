import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Driver} from "../../../models/driver";
import {NavController} from "@ionic/angular";
// import {CreateAccountDriverService} from "../../services/forms/add-driver/create-account-driver.service";
import {User} from "../../../models/user";
import {CreateAccountDriverService} from "../../../services/forms/add-driver/create-account-driver.service";
import {Geolocation} from "@capacitor/core";
import * as L from "leaflet";


@Component({
  selector: 'app-create-account-driver',
  templateUrl: './create-account-driver.page.html',
  styleUrls: ['./create-account-driver.page.scss'],
})
export class CreateAccountDriverPage implements OnInit {
  driver?: Driver;
  errorForm:boolean = false;
  user?:User;
  addDriverFormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    phoneNumber  : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    repeatPassword  : new FormControl('',Validators.required),
  })
  private latitude: string;
  private longitude: string;

  constructor(private navCtrl: NavController,private createAccountDriverService:CreateAccountDriverService) { }

  ngOnInit() {
  }

  backHome() {
    this.navCtrl.navigateForward("driver");
  }
  addDriver() {
    // this.getLocation();

    // console.log(this.longitude + " " + this.latitude);
    this.user  = this.addDriverFormGroup.value;
    Geolocation.getCurrentPosition().then((resp) => {
      this.user.longitude  = String(resp.coords.longitude);
      this.user.latitude  = String(resp.coords.latitude);
      this.createAccountDriverService.addDriver(this.user).subscribe(response => {
        console.log(response);
        this.navCtrl.navigateForward("driver");
      },error => {
        console.log(error);
      })
    }).catch((error) => {
      console.log('Error getting location ', error);
    });
    console.log(this.user);
      // this.createAccountDriverService.addDriver(this.user).subscribe(response => {
      //   console.log(response);
      //   this.navCtrl.navigateForward("driver");
      // },error => {
      //   console.log(error);
      // })

  }
  // async getLocation() {
  //   Geolocation.getCurrentPosition().then((resp) => {
  //     this.longitude = resp.coords.longitude;
  //     this.latitude  = resp.coords.latitude;
  //   }).catch((error) => {
  //     console.log('Error getting location ', error);
  //   });
  //
  // }
}
