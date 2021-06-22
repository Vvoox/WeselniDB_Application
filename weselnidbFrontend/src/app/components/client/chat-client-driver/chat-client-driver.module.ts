import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatClientDriverPageRoutingModule } from './chat-client-driver-routing.module';

import { ChatClientDriverPage } from './chat-client-driver.page';
import {FooterPageModule} from "../../footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChatClientDriverPageRoutingModule,
        FooterPageModule,
        ReactiveFormsModule
    ],
  declarations: [ChatClientDriverPage]
})
export class ChatClientDriverPageModule {}
