import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicAngularModule } from '@ionic/angular';
import { VirtualScrollPageComponent } from './virtual-scroll-page.component';
import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicAngularModule,
    VirtualScrollRoutingModule
  ],
  declarations: [VirtualScrollPageComponent]
})
export class VirtualScrollModule { }
