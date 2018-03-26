import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPageComponent } from './content-page.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [ContentPageComponent]
})
export class ContentModule { }
