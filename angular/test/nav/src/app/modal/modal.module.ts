import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicAngularModule } from '@ionic/angular';
import { ModalPageComponent } from './modal-page.component';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalPageToPresent } from './modal-page-to-present';

@NgModule({
  imports: [
    CommonModule,
    IonicAngularModule.forRoot(),
    ModalRoutingModule
  ],
  declarations: [
    ModalPageComponent,
    ModalPageToPresent
  ],
  entryComponents: [
    ModalPageToPresent
  ]
})
export class ModalModule { }
