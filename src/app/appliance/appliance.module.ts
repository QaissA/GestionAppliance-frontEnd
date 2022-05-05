import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ApplianceRoutingModule } from './appliance-routing.module';
import { ApplianceHomeComponent } from './appliance-home/appliance-home.component';
import { FormApplianceComponent } from './form-appliance/form-appliance.component';
import { AppliancetableComponent } from './appliancetable/appliancetable.component';
import { FormApplianceUpdateComponent } from './form-appliance-update/form-appliance-update.component';


@NgModule({
  declarations: [
    ApplianceHomeComponent,
    FormApplianceComponent,
    AppliancetableComponent,
    FormApplianceUpdateComponent
  ],
  imports: [
    CommonModule,
    ApplianceRoutingModule,
    FormsModule,
  ]
})
export class ApplianceModule { }
