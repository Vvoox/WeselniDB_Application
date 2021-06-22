import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'driver',
    loadChildren: () => import('./components/driver/driver.module').then( m => m.DriverPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./components/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./components/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'pickup-location',
    loadChildren: () => import('./components/pickup-location/pickup-location.module').then( m => m.PickupLocationPageModule)
  },
  {
    path: 'create-account-driver',
    loadChildren: () => import('./components/driver/create-account-driver/create-account-driver.module').then(m => m.CreateAccountDriverPageModule)
  },
  {
    path: 'driver-home',
    loadChildren: () => import('./components/driver/driver-home/driver-home.module').then(m => m.DriverHomePageModule)
  },
  {
    path:'driver-home/driver-home',
    redirectTo:'driver-home'
  },
  {
    path :'driver-home/driver-profile',
    redirectTo : 'driver-profile'
  },
  {
    path:'driver-home/driver-chat',
    redirectTo :'driver-chat'
  },
  {
    path:'driver-home/driver-settings',
    redirectTo:'driver-settings'
  },
  {
    path: 'driver-chat',
    loadChildren: () => import('./components/driver/driver-chat/driver-chat.module').then(m => m.DriverChatPageModule)
  },
  {
    path:'driver-chat/driver-chat',
    redirectTo:'chat'
  },
  {
    path:'driver-chat/driver-home',
    redirectTo:'driver-home'
  },
  {
    path:'driver-chat/driver-profile',
    redirectTo:'driver-profile'
  },
  {
    path:'driver-chat/driver-settings',
    redirectTo:'driver-settings'
  },{
    path:'driver-settings/driver-home',
    redirectTo:'driver-home'
  },
  {
    path:'driver-settings/driver-chat',
    redirectTo:'driver-chat'
  },
  {
    path:'driver-settings/driver-profile',
    redirectTo:'driver-profile'
  },
  {
    path:'driver-settings/driver-settings',
    redirectTo:'driver-settings'
  },
  {
    path: 'driver-profile',
    loadChildren: () => import('./components/driver/driver-profile/driver-profile.module').then(m => m.DriverProfilePageModule)
  },
  {
    path:'driver-profile/driver-profile',
    redirectTo:'driver-profile'
  },
  {
    path: 'driver-profile/driver-home',
    redirectTo : 'driver-home'
  },
  {
    path:'driver-profile/driver-chat',
    redirectTo:'driver-chat'
  },

  {
    path:'driver-profile/driver-settings',
    redirectTo:'driver-settings'
  },
  {
    path: 'driver-settings',
    loadChildren: () => import('./components/driver/driver-settings/driver-settings.module').then(m => m.DriverSettingsPageModule)
  },

  {
    path: 'footer',
    loadChildren: () => import('./components/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'chat-client-driver/:id',
    loadChildren: () => import('./components/client/chat-client-driver/chat-client-driver.module').then(m => m.ChatClientDriverPageModule)
  },
  {
    path: 'chat-driver-client',
    loadChildren: () => import('./components/driver/chat-driver-client/chat-driver-client.module').then(m => m.ChatDriverClientPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
