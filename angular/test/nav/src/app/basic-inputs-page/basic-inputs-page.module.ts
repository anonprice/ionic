import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicAngularModule } from '@ionic/angular';

import { BasicInputsPageComponent } from './basic-inputs-page.component';
import { BasicInputsPageRoutingModule } from './basic-inputs-page-routing.module';

@NgModule({
  imports: [
    BasicInputsPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicAngularModule
  ],
  declarations: [BasicInputsPageComponent]
})
export class BasicInputsPageModule {}
