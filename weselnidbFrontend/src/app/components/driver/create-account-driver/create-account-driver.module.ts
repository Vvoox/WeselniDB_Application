import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountDriverPageRoutingModule } from './create-account-driver-routing.module';

import { CreateAccountDriverPage } from './create-account-driver.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateAccountDriverPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CreateAccountDriverPage]
})
export class CreateAccountDriverPageModule {}
