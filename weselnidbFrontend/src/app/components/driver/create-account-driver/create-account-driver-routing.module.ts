import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountDriverPage } from './create-account-driver.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccountDriverPageRoutingModule {}
