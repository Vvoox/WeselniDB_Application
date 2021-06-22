import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DriverService} from "../../services/driver-service/driver.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  driverLogin = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })
  user?:User;

  constructor(private navCtrl: NavController , private driverService:DriverService) { }

  ngOnInit() {
  }

    backHome() {
    console.log("back");
    this.navCtrl.navigateBack("home");
    }
    createAccount(){
    this.navCtrl.navigateForward("create-account-driver");
    }

    logIn(){
    this.user=this.driverLogin.value;
    this.user.role = "DRIVER";
    this.driverService.logIn(this.user);
    }

    forgetPassword() {
    this.navCtrl.navigateBack("forget-password");
  }
}
