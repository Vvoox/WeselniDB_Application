import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverHomePageRoutingModule } from './driver-home-routing.module';

import { DriverHomePage } from './driver-home.page';
import {FooterPageModule} from "../../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverHomePageRoutingModule,
    FooterPageModule
  ],
  declarations: [DriverHomePage]
})
export class DriverHomePageModule {}
