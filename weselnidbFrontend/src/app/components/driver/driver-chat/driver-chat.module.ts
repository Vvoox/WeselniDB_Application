import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverChatPageRoutingModule } from './driver-chat-routing.module';

import { DriverChatPage } from './driver-chat.page';
import {FooterPageModule} from "../../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverChatPageRoutingModule,
    FooterPageModule
  ],
  declarations: [DriverChatPage]
})
export class DriverChatPageModule {}
