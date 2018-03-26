import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { IonicAngularModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    IonicAngularModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
