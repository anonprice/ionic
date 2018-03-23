import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgePageComponent } from './badge-page.component';
import { BadgeRoutingModule } from './badge-routing.module';
import { IonicAngularModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    BadgeRoutingModule,
    IonicAngularModule
  ],
  declarations: [BadgePageComponent]
})
export class BadgeModule { }
