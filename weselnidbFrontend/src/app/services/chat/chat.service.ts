import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  serverUrl=environment.BASE;
  private stompClient;

  constructor() { }

  // initializeWebSocketConnection(){
  //   this.sockJS = new SockJS(this.serverUrl);
  //   this.stompClient = Stomp.over(this.sockJS);
  //   let that = this;
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe("/chat", (message) => {
  //       if(message.body) {
  //         $(".chat").append("<div class='message'>"+message.body+"</div>")
  //         console.log(message.body);
  //       }
  //     });
  //   });
  // }

}
