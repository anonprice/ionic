import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleNavPageComponent } from './simple-nav.component';
import { SimpleNavRoutingModule } from './simple-nav-routing.module';

import { IonicAngularModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SimpleNavPageComponent,
  ],
  imports: [
    CommonModule,
    IonicAngularModule,
    SimpleNavRoutingModule
  ]
})
export class SimpleNavModule {}
