import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { DatePipe } from '@angular/common';
import {WebsocketService} from "../../../services/websocket/websocket.service";
import {NavController} from "@ionic/angular";
import {Message} from "../../../models/message";
import {DriverService} from "../../../services/driver-service/driver.service";
import {Conversation} from "../../../models/conversation";


@Component({
  selector: 'app-chat-driver-client',
  templateUrl: './chat-driver-client.page.html',
  styleUrls: ['./chat-driver-client.page.scss'],
})
export class ChatDriverClientPage implements OnInit {
  time: any;
  public messageOutput: string[] = [];
  client : string;
  date = new Date();
  username :string;
  public messages : Conversation;

  chat = new FormGroup({
    message : new FormControl('',Validators.required),
  })

  constructor(private driverService:DriverService , private navCtrl: NavController, public websocketService: WebsocketService , private datePipe: DatePipe) {

    // this.messageOutput = "hello";
  }

  ngOnInit() {
    this.client = localStorage.getItem("fromLogin");
    this.messageOutput.push(localStorage.getItem("message"));
    this.username = this.driverService.parseJwt().user.name;
    // this.websocketService._connect(this.username);
    this.messages = this.websocketService.getMessageOutput();
  }
  formatDate(date= new Date()) {
    this.time=  this.datePipe.transform(date,'MM-dd-yyyy hh-mm-ss' );
  }

  // findMessages(fromLogin){
  //   return this.messages.filter(value => value.fromLogin == fromLogin);
  // }

  send() {
      this.time=  this.datePipe.transform(this.date,'hh-mm-ss' );
      this.messageOutput.push(this.chat.value.message);
      // this.websocketService.setMessageOutput(this.chat.value.message);
      // this.websocketService.setMessageOutput({message:this.chat.value.message,fromLogin:this.username});
      console.log({message:this.chat.value.message,fromLogin:this.username});
      this.websocketService._send(this.chat.value.message,this.client,this.username);
      this.websocketService.setDriver(this.username);
      this.chat.value.message ='';
  }

  backHome() {
    this.navCtrl.navigateBack("driver-chat");
  }
}
