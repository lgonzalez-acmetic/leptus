import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PricesComponent } from './prices/prices.component';
import { TeamComponent } from './team/team.component';
import { ContentComponent } from './content/content.component';
import { ApplicationPipesModule } from 'src/app/pipes/application-pipes.module';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PricesComponent,
    TeamComponent,
    ContentComponent,

  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PricesComponent,
    TeamComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    ApplicationPipesModule
  ]
})
export class SharedModule { }
