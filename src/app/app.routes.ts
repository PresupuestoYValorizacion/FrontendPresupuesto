import { Routes } from '@angular/router';
import LoginComponent from './auth/login/login.component';
import RegisterComponent from './auth/register/register.component';
import RecoverComponent from './auth/recover/recover.component';
import { LayoutPageComponent } from './pages/layout-page.component';

export const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'recover',
    component: RecoverComponent
  },
  {
    path:'authenticated',
    component: LayoutPageComponent
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
