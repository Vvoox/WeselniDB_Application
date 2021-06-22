import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverSettingsPageRoutingModule } from './driver-settings-routing.module';

import { DriverSettingsPage } from './driver-settings.page';
import {FooterPageModule} from "../../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverSettingsPageRoutingModule,
    FooterPageModule
  ],
  declarations: [DriverSettingsPage]
})
export class DriverSettingsPageModule {}
