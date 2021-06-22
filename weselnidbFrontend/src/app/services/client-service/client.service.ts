import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Driver} from "../../models/driver";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  host = environment.BASEURL;


  constructor(private http: HttpClient) { }

  getAllDriversLocation(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.host + '/driver/location');
  }

}
