import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path : 'client', loadChildren : () => import('./client/client.module').then((m) => m.ClientModule)},
  {path : 'appliance', loadChildren : () => import('./appliance/appliance.module').then((m) => m.ApplianceModule)},
  {path :'', component: HomeComponent},
  {path :'**', component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
