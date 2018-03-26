import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgePageComponent } from './badge-page.component';
import { BadgeRoutingModule } from './badge-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    BadgeRoutingModule,
    IonicModule
  ],
  declarations: [BadgePageComponent]
})
export class BadgeModule { }
