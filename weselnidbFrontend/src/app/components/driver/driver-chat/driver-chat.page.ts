import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Client} from "../../../models/client";
import {WebsocketService} from "../../../services/websocket/websocket.service";
import {DriverService} from "../../../services/driver-service/driver.service";
import {Stomp} from "@stomp/stompjs";
import stompClient from 'stompjs';
import SockJs from 'sockjs-client';
import {Message} from "../../../models/message";
import {Conversation} from "../../../models/conversation";


@Component({
  selector: 'app-driver-chat',
  templateUrl: './driver-chat.page.html',
  styleUrls: ['./driver-chat.page.scss'],
})
export class DriverChatPage implements OnInit {
  client?:Client;
  webSocketEndPoint: string = 'http://localhost:8080/chat';
  topic: string = "/topic/messages/";
  username :string;
  stompClient: any;
  public messages: Conversation;
  constructor(private driverService:DriverService , public websocketService : WebsocketService,private navCtrl: NavController) {
    // this.driverService.parseJwt();
    // this.data = this.websocketService._connect(this.driverService.parseJwt().user.name);
    console.log("DRIVER CHAT...");
    this.username = this.driverService.parseJwt().user.name;
  }

  // connect(username) {
  //   console.log("Initialize WebSocket Connection");
  //   let ws = new SockJs(this.webSocketEndPoint);
  //   this.stompClient = Stomp.over(ws);
  //   const _this = this;
  //   _this.stompClient.connect({}, function (frame) {
  //     _this.stompClient.subscribe(_this.topic + username, response => {
  //       _this.onGetMessage(JSON.parse(response.body));
  //     });
  //     //_this.stompClient.reconnect_delay = 2000;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
  // onGetMessage(message){
  //   // console.log(message);
  //   this.data.push(message);
  //   let len = this.data.length;
  //   console.log(this.data[len-1])
  //   localStorage.setItem("fromLogin",this.data[len-1].fromLogin);
  //   localStorage.setItem("message",this.data[len-1].message);
  //   // this.websocketService.setMessageOutput(message.message);
  //   localStorage.setItem("name",this.username);
  // }

  ngOnInit() {
    this.websocketService._connect(this.username);
    this.messages = this.websocketService.getMessageOutput();

    // this.websocketService._connect()

  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('name');
    this.navCtrl.navigateBack("driver");
  }
  showMessage(){


  }

  chatWithClient() {
    console.log("chat with client");
    this.navCtrl.navigateForward("chat-driver-client");
  }
}
