import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionSheetPageComponent } from './action-sheet-page.component';
import { ActionSheetRoutingModule } from './action-sheet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActionSheetRoutingModule
  ],
  declarations: [ActionSheetPageComponent]
})
export class ActionSheetModule { }
