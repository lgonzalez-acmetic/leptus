import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
    // canActivate: [AuthGuard]
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./pages/landing-page/landing-page.module').then(
  //       (m) => m.LandingPageModule
  //     ),
  //   // canActivate: [AuthGuard]
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'registrar',
    loadChildren: () =>
      import('./pages/auth/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
    // canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
