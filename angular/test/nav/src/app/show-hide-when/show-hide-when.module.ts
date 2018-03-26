import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHideWhenComponent } from './show-hide-when-page.component';
import { ShowHideWhenRoutingModule } from './show-hide-when-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShowHideWhenRoutingModule
  ],
  declarations: [ShowHideWhenComponent]
})
export class ShowHideWhenModule { }
