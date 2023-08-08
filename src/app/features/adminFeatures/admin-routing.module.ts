import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from 'src/app/shared/guard/adminAuth/admin.guard';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DocReqListComponent } from './components/doc-req-list/doc-req-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AdminGuard] },
  {
    path: '',
    component: AdminLayoutComponent, // Use the common layout for all pages except login and register
    children: [
      {
        path: 'home',
        component: UsersListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'doctors',
        component: DoctorsListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'doc-request',
        component: DocReqListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'docDetails/:id',
        component: DoctorDetailsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'appoinment',
        component: AppointmentListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
