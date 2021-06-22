import { Component, OnInit, ViewChild , ElementRef, } from '@angular/core';
import {NavController }  from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';

declare  var google:any;
@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  clientForm = new FormGroup({
    name:new FormControl('',Validators.required),
    phoneNumber : new FormControl('',Validators.required),
  })
  map :any;

  @ViewChild('map',{read:ElementRef , static:false}) mapRef:ElementRef;
  pickupLocation: any;
  webSocketEndPoint: string = 'http://localhost:8080/';
  topic: string = "/topic/messages/";
  stompClient: any;

    constructor(private navCtrl:NavController , private router:Router,private route:ActivatedRoute ) {
      this.route.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.state){
          this.pickupLocation = this.router.getCurrentNavigation().extras.state.pickupLocation;
        }
      });



  }

  connect(username) {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    let data:any;
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe(_this.topic+username, response => {
        // this.message.fromLogin = JSON.parse(response.body.fromLogin);
        // console.log("Response");
        // _this.onGetMessage(JSON.parse(response.body).message);
      });

      //_this.stompClient.reconnect_delay = 2000;
    }, error => {
      console.log(error);
    });

  }

  ionViewDidEnter(){
    // this.showMap();
  }
  onpickupClick(){
      localStorage.setItem("name",this.clientForm.value.name);
      localStorage.setItem("phoneNumber",this.clientForm.value.phoneNumber);
      this.navCtrl.navigateForward(['pickup-location']);
  }



  ngOnInit() {
  }

    backHome() {
    this.navCtrl.navigateBack("home")
    }

}
