import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
    // canLoad: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
    // canLoad: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
    // canLoad: [AuthGuard]
  },
  { path: '**', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
