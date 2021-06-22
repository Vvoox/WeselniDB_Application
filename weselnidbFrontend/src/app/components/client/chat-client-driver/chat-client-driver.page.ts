import {Component, Injectable, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {WebsocketService} from "../../../services/websocket/websocket.service";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { WebSocketServer } from '@ionic-native/web-socket-server';
import {RxStompService} from "@stomp/ng2-stompjs";
import {AppComponent} from "../../../app.component";
import {ActivatedRoute} from "@angular/router";
import {DriverService} from "../../../services/driver-service/driver.service";
import {Driver} from "../../../models/driver";
import { DatePipe } from '@angular/common';
import stompClient from 'stompjs';
import SockJs from 'sockjs-client';
import {Message} from "../../../models/message";
import {Conversation} from "../../../models/conversation";

declare const messages : string[] ;
export const MSG : Message = {};

@Component({
  selector: 'app-chat-client-driver',
  templateUrl: './chat-client-driver.page.html',
  styleUrls: ['./chat-client-driver.page.scss'],
})
@Injectable()
export class ChatClientDriverPage implements OnInit {
  chat = new FormGroup({
    message : new FormControl('',Validators.required),
  })
  webSocketEndPoint: string = 'http://192.168.1.109:8080/';
  topic: string = "/topic/messages/";
  stompClient: any;
  // webSocketService : WebsocketService
  public receivedMessages: string[] = [];
  // appComponent: AppComponent;
  private driverId;
  driver : Driver;
  time :any;
  date = new Date();
  username = localStorage.getItem("name");
  public messageOutput: string[] = [];
  public messages ?: Conversation;

  ngOnInit(): void {
    // this.webSocketService = new WebsocketService(new AppComponent());

  }


  constructor(private datePipe: DatePipe , private driverService: DriverService, private activatedRoute: ActivatedRoute,private websocketService: WebsocketService, private navCtrl: NavController){
    this.websocketService._connect(localStorage.getItem("name"));
    this.messages = this.websocketService.getMessageOutput();
    // @ts-ignore
    length = activatedRoute._routerState.snapshot.url.split("/").length;
    // @ts-ignore
    this.driverId = activatedRoute._routerState.snapshot.url.split("/")[length - 1];
    console.log(this.driverId);
    this.getDriver(this.driverId);

    // if(localStorage.getItem("message")!=null){
    //  console.log(localStorage.getItem("message"));
    // }

    // console.log(this.websocketService.onMessageReceived());

  }

  formatDate(date= new Date()) {
    this.time=  this.datePipe.transform(date,'MM-dd-yyyy hh-mm-ss' );
  }

  // connect(username) {
  //   console.log("Initialize WebSocket Connection");
  //   let ws = new SockJs(this.webSocketEndPoint);
  //   let data:any;
  //   this.stompClient = Stomp.over(ws);
  //   const _this = this;
  //   _this.stompClient.connect({}, function (frame) {
  //     _this.stompClient.subscribe(_this.topic+username, response => {
  //       // this.message.fromLogin = JSON.parse(response.body.fromLogin);
  //       // console.log("Response");
  //       _this.onGetMessage(JSON.parse(response.body).message);
  //     });
  //
  //     //_this.stompClient.reconnect_delay = 2000;
  //   }, error => {
  //     console.log(error);
  //   });
  //
  // }

  // onGetMessage(message){
  //   console.log(message);
  //   this.messageOutput.push(message);
  //   let len = this.messageOutput.length;
  //   console.log(this.messageOutput[len-1])
  //   localStorage.setItem("message",this.messageOutput[len-1]);
  // }


  getDriver(id){
    this.driverService.getOneDriver(id).subscribe(response => {
      this.driver = response;
      console.log("Selected Driver");
      console.log(this.driver);
    },error => {
      console.log(error);
    })
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  send() {
    // this.messageOutput.push(localStorage.getItem("message"));

    this.time=  this.datePipe.transform(this.date,'hh-mm-ss' );
    this.messageOutput.push(this.chat.value.message);
    // MSG.push(this.chat.value.message);
    // this.websocketService.setMessageOutput({message:this.chat.value.message,fromLogin:this.username});
    this.websocketService._send(this.chat.value.message,this.driver.user.name,this.username);
    console.log({message:this.chat.value.message,fromLogin:this.username});
    this.chat.value.message ='';
  }
  // _send(message,selected) {
  //   console.log("calling logout api via web socket");
  //   // this.stompClient.send("/app/hello", {}, JSON.stringify(message));
  //   this.stompClient.send("/app/chat/" + selected, {}, JSON.stringify({
  //     fromLogin: this.username,
  //     message: message,
  //   }));
  // }



  backHome() {
    this.navCtrl.navigateBack("pickup-location");
    // this.websocketService._messageOutput.pop();
    // this.websocketService._messageOutput.pop()

  }
}
