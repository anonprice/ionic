import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPageComponent } from './card-page.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CardRoutingModule
  ],
  declarations: [CardPageComponent]
})
export class CardModule { }
