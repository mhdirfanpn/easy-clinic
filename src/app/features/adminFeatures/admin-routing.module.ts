import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from 'src/app/shared/guard/adminAuth/admin.guard';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent, canActivate: [AdminGuard] },
  {
    path: 'home',
    component: AdminLayoutComponent, // Use the common layout for all pages except login and register
    children: [
      { path: '', component: UsersListComponent, canActivate: [AdminGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
