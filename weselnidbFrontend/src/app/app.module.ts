import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RxStompService, StompRService} from '@stomp/ng2-stompjs';
import { WebsocketService } from './services/websocket/websocket.service';
import {DatePipe} from "@angular/common";
import {ChatClientDriverPage, MSG} from "./components/client/chat-client-driver/chat-client-driver.page";
import {Message} from "./models/message";


@NgModule({
  declarations: [
      AppComponent
  ],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StompRService,
    RxStompService,
    WebsocketService,
    StatusBar,
    DatePipe,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
