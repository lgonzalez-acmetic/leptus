import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { ApplicationPipesModule } from 'src/app/pipes/application-pipes.module';

@NgModule({
  declarations: [
    LandingPageComponent,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ApplicationPipesModule
  ]
})
export class LandingPageModule { }
