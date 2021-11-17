import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';


//  { MenuSidebarModule } from './menu-sidebar/menu-siderar.module';

@NgModule({
  declarations: [HomePageComponent,],
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ],
  exports: [HomePageComponent],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class HomePageModule {}
