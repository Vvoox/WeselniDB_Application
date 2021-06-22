import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "../../../models/driver";
import {environment} from "../../../../environments/environment";
import {User} from "../../../models/user";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountDriverService {

  constructor(private http: HttpClient) { }
  host = environment.BASEURL;

  addDriver(user): Observable<User> {
    return this.http.post<User>(this.host + '/driver/add',user);
  }



}
