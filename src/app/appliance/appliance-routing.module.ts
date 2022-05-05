import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceHomeComponent } from './appliance-home/appliance-home.component';

const routes: Routes = [
  {path : '', component: ApplianceHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplianceRoutingModule { }
