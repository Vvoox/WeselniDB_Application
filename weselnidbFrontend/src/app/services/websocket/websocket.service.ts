import {Inject, Injectable} from '@angular/core';
import stompClient from 'stompjs';
import SockJs from 'sockjs-client';
import { StompConfig, StompRService, StompState } from '@stomp/ng2-stompjs';
import {environment} from "../../../environments/environment";
import {Stomp} from "@stomp/stompjs";
import {ChatClientDriverPage, MSG} from "../../components/client/chat-client-driver/chat-client-driver.page";
import {AppComponent} from "../../app.component";
import {Message} from "../../models/message";
import {Client} from "../../models/client";
import {Driver} from "../../models/driver";
import {Conversation} from "../../models/conversation";


@Injectable({
  providedIn: 'root'
})
  export class WebsocketService {


  // public connect() {
  //   this.stompService.config = {
  //     headers:  {
  //       Authorization: 'Bearer ' + localStorage.getItem('token'),
  //       // 'X-XSRF-TOKEN': localStorage.getItem('XSRF-TOKEN')
  //     },
  //     heartbeat_in: 30000,
  //     heartbeat_out: 30000,
  //     reconnect_delay: 5000,
  //     url: () => new SockJs(this.serverUrl+"/chat"),
  //     debug: true,
  //   };
  //   this.stompService.initAndConnect();
  //   this.stompService.publish({destination: "/app/chat/", body: "hello world"});
  //
  // }
  webSocketEndPoint: string = environment.WebSocket;
  topic: string = "/topic/messages/";
  username = localStorage.getItem("name");
  stompClient: any;
  private message: Message;
  data?:any;
  chatClientDriverPage: ChatClientDriverPage;
  private _messageOutput: Conversation ;
  private  driver : Driver;
  private  client:Client;


  constructor(){
  }

  _connect(username) {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJs(this.webSocketEndPoint);
    let data:any;
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe(_this.topic+username, response => {
          _this.onMessageReceived(JSON.parse(response.body));
          // console.log("function connect");
          // console.log(username);
          // console.log(JSON.parse(response.body));
      });
      return data;

      //_this.stompClient.reconnect_delay = 2000;
    }, this.errorCallBack);

  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error,username) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this._connect(username);
    }, 5000);
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  _send(message,destination,fromLogin) {

    console.log("calling send api via web socket");
    // this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    this.stompClient.send("/app/chat/" + destination, {}, JSON.stringify({
      fromLogin: fromLogin,
      message: message,
    }));
  }
  setDriver(name){
    return name;
  }

  getMessageOutput(): Conversation {
    return this._messageOutput;
  }

  setMessageOutput(value: Conversation) {
    this._messageOutput = value;
  }

// public getMessageOutput(): Conversation{
  //   return this._messageOutput;
  // }
  //
  //
  // public setMessageOutput(value) {
  //   // this._messageOutput.push(value);
  //   // if(this.getMessageOutput().length>0){
  //   //   for (let message of this.getMessageOutput()){
  //   //     if(value?.fromLogin === message.fromLogin){
  //   //         this.message= value
  //   //     }
  //   //     else{
  //   //       this._messageOutput.push(value);
  //   //     }
  //   //   }
  //   // }
  //   // else{
  //   //   this._messageOutput.push(value);
  //   // }
  //   this._messageOutput = value;
  // }

  public onMessageReceived(message) {
    this.setMessageOutput(message);
    // localStorage.setItem("fromLogin",message.sender?.name);
    // console.log(this.getMessageOutput());

    console.log(message);
  }
    // connect1(){
    //     console.log("connection...");
    //     let socket = new SockJs(this.serverUrl+"/chat");
    //     this.stompClient = Stomp.over(socket);
    //     stompClient.connect({},function (frame){
    //       console.log("connected to "+frame);
    //       this.stompClient.subscribe("/topic/messages"+this.username,function (response) {
    //         let data = JSON.parse(response.body);
    //         console.log(data);
    //       })
    //     });
    // }

  // send(){
  //
  // }

  // public getStomp() {
  //   return this.stompService;
  // }
}
