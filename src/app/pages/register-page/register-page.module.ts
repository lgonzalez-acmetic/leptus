import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';
import { RegisterPageRoutingModule } from './register-page-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RegisterPageComponent],
  providers: [],
  bootstrap: [RegisterPageComponent],
})
export class RegisterPageModule {}
