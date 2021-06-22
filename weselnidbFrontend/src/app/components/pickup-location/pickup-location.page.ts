import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Map,tileLayer,marker} from 'leaflet';
import {NavController} from "@ionic/angular";
import {ActivatedRoute, NavigationExtras, Route, Router} from "@angular/router";
import {NativeGeocoder, NativeGeocoderOptions} from "@ionic-native/native-geocoder";
import * as L from 'leaflet';
import {ClientService} from "../../services/client-service/client.service";
import {Driver} from "../../models/driver";
import {environment} from "../../../environments/environment";
import {Geolocation} from "@capacitor/core";
import {DriverService} from "../../services/driver-service/driver.service";
import {User} from "../../models/user";
// import { Geolocation } from '@ionic-native/geolocation/ngx';

declare  var google:any;

@Component({
  selector: 'app-pickup-location',
  templateUrl: './pickup-location.page.html',
  styleUrls: ['./pickup-location.page.scss'],
})
export class PickupLocationPage implements OnInit {
  map: L.Map;
  newMarker: any;
  address: string[];
  drivers: Driver[];
  users: User[];
  longitude: number;
  latitude : number;

   myIcon = L.icon({
    iconUrl: 'assets/icon/motorbiking.png',
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
    // shadowUrl: 'assets/icon/motorbiking.png',
    // shadowSize: [20, 20],
    // shadowAnchor: [22, 94]
  });

  @ViewChild('map',{read:ElementRef , static:false}) mapRef:ElementRef;
  pickupLocation: any;

  constructor(@Inject(Router) private routerr: Route,private driverService: DriverService , private navCtrl:NavController , private router:Router,private route:ActivatedRoute) {
  }

  ionViewDidEnter(){
    // this.showMap();

  }
  // var container = L.DomUtil.create('div')
  // startBtn = this.createButton('Start from this location', container)

  getAllDriver(){

    this.driverService.getAllDriversLocation().subscribe(response =>{
      console.log(response);
      this.drivers = response;
      console.log(response);
      this.drivers.forEach(driver =>{
        L.marker([Number(driver.user.latitude),Number(driver.user.longitude)])
            .addTo(this.map)
            .on( 'click', () => {
              // alert("toto");
              this.router.navigate(["chat-client-driver/",driver.id]);
              // this.navCtrl.navigateForward("chat-client-driver");
              console.log(driver)
            })
            .bindPopup("Driver "+driver.user.name)
            // .bindPopup("Driver "+driver.user.name+
            //     '<br/><ion-button type="button" expand="block" color="primary" id="buttonChat" style="height: 25px;dth: 20px;"  data =>'+"Chat"+'</ion-button>')
            .setIcon(this.myIcon)
            .openPopup();
      })
      //client position
      // L.marker([31.6364148,-8.0145113]).addTo(this.map)
      //     .bindPopup('Your Current location')
      //     .openPopup();
    },error => {
      console.error(error);
    })
  }
  selectDriver(driver:Driver){
    console.log("select driver")
    // this.rou.navigateRoot("client");
    // this.router.navigate(['/client']);
    // this.navCtrl.("chat-client-driver");
    // this.router.navigateByUrl("chat-client-driver");
  }


  async ngOnInit() {
    const position = await Geolocation.getCurrentPosition();
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
    this.getLocation();
    this.getAllDriver();
    // L.marker([31.6419062,-8.0157537]).addTo(this.map)
    //     .bindPopup('Driver Khalil Location .')
    //     .openPopup();

    setTimeout(()=>{
      this.map.invalidateSize();
    },0);
  }

  backHome() {
    this.navCtrl.navigateBack("client");
  }
  goBack() {
    this.navCtrl.navigateBack("client");
  }

  async getLocation() {
    // const position = await Geolocation.getCurrentPosition();
    // this.latitude = position.coords.latitude;
    // this.longitude = position.coords.longitude;
    console.log(this.latitude + " " + this.longitude);
    Geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.longitude = resp.coords.longitude;
      this.latitude = resp.coords.latitude;
      L.marker([resp.coords.latitude, resp.coords.longitude]).addTo(this.map)
          .bindPopup('My Current location')
          .openPopup();
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }




}
