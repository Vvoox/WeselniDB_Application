import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverPage } from './driver.page';

const routes: Routes = [
  {
    path: '',
    component: DriverPage
  },
  {
    path: 'driver-home',
    loadChildren: () => import('./driver-home/driver-home.module').then( m => m.DriverHomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverPageRoutingModule {}
