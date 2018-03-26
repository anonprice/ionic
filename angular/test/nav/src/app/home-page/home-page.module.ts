import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    IonicModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
