import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { ObjToArrayPipe } from 'src/app/objToArray.pipe';


@NgModule({
  declarations: [
    LandingPageComponent,
    ObjToArrayPipe
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
