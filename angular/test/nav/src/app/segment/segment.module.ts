import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicAngularModule } from '@ionic/angular';

import { SegmentPageComponent } from './segment-page.component';
import { SegmentRoutingModule } from './segment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SegmentRoutingModule,
    IonicAngularModule
  ],
  declarations: [SegmentPageComponent]
})
export class SegmentModule { }
