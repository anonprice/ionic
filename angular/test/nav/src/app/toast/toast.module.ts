import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastPageComponent } from './toast-page.component';
import { ToastRoutingModule } from './toast-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ToastRoutingModule
  ],
  declarations: [ToastPageComponent]
})
export class ToastModule { }
