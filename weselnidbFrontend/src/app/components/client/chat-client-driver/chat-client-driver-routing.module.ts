import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatClientDriverPage } from './chat-client-driver.page';

const routes: Routes = [
  {
    path: '',
    component: ChatClientDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatClientDriverPageRoutingModule {}
