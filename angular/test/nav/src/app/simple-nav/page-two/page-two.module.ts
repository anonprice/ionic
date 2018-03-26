import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonicAngularModule,
} from '@ionic/angular';

import { PageTwo } from './page-two';
import { PageTwoRoutingModule } from './page-two-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    IonicAngularModule,
  ],
  declarations: [
    PageTwo,
  ]
})
export class PageTwoModule { }
