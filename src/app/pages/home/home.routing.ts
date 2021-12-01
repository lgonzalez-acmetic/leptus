import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      // { path: '', component: DashboardComponent },
      // { path: 'progress', component: ProgressComponent  },
      // { path: 'grafica1', component: Grafica1Component  },
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
