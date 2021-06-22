import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Geolocation} from "@capacitor/core";
import * as L from "leaflet";
import {DriverService} from "../../../services/driver-service/driver.service";
import {User} from "../../../models/user";
import {WebsocketService} from "../../../services/websocket/websocket.service";


@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.page.html',
  styleUrls: ['./driver-home.page.scss'],
})
export class DriverHomePage implements OnInit {

  constructor(private websocketService: WebsocketService , private navCtrl: NavController,private driverService: DriverService) {

  }
  longitude: number;
  latitude : number;
  map: L.Map;
  user?:User;


  async ngOnInit() {
    // this.websocketService.c


    const position = await Geolocation.getCurrentPosition();
    // this.user =  this.driverService.parseJwt().user;
    // this.websocketService._connect(this.user.name);
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log(this.latitude + " " + this.longitude);

    this.map = L.map('map', {
      center: [this.latitude, this.longitude],
      zoom: 13,
      renderer: L.canvas()
    });


    //Show map with previous lat and lan
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
          'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map);
    L.marker([Number(this.latitude),Number(this.longitude)]).addTo(this.map)
        .bindPopup('My Location')
        .openPopup();

    setTimeout(()=>{
      this.map.invalidateSize();
    },0);

  }

  backHome() {
    this.navCtrl.navigateBack("home")
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('name');
    this.navCtrl.navigateBack("driver");
  }
}
