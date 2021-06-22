import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Driver} from "../../models/driver";
import {User} from "../../models/user";
import {TokenResponse} from "../../models/tokenResponse";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private navCtrl: NavController , private http: HttpClient) { }

  host=environment.BASEURL;
  tokenResponse: TokenResponse;

  getAllDriversLocation(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.host + '/driver/location');
  }
  getOneDriver(id): Observable<Driver> {
    return this.http.get<Driver>(this.host + '/driver/'+id);
  }

  logIn(user) {
      this.http.post(this.host + '/driver/auth',user,{ withCredentials: true }).subscribe(response => {
      console.log("token response");
      // console.log(response.token);
      // console.log(response.expireAt);
        this.tokenResponse = response;
      localStorage.setItem('token',this.tokenResponse.token)
      localStorage.setItem('expiration',this.tokenResponse.expireAt.toString());
        this.navCtrl.navigateForward("driver-home");
      },error => {
      console.log(error);
    });
  }
  logOut(){
    return this.http.get(this.host + '/driver/logout');
  }
  // token = localStorage.getItem('token');
  token = localStorage.getItem('token');
   base64Url = '';


  parseJwt () {
    if(this.token != null){
       this.base64Url = this.token.split('.')[1];
    }
    else{
      this.base64Url = this.tokenResponse.token.split('.')[1];
    }
    const base64 = this.base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(JSON.parse(jsonPayload));
    console.log(JSON.parse(jsonPayload).user.longitude);
    console.log(JSON.parse(jsonPayload).user.name);

    return JSON.parse(jsonPayload);
  };
}
