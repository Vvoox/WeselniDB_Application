import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDriverClientPage } from './chat-driver-client.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDriverClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDriverClientPageRoutingModule {}
