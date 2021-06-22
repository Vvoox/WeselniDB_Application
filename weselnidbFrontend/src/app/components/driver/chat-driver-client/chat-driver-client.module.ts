import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDriverClientPageRoutingModule } from './chat-driver-client-routing.module';

import { ChatDriverClientPage } from './chat-driver-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDriverClientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChatDriverClientPage]
})
export class ChatDriverClientPageModule {}
