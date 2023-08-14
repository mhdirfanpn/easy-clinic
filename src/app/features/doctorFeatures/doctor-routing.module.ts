import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorGuard } from 'src/app/shared/guard/doctorAuth/doctor.guard';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { AppointmnetComponent } from './components/appointmnet/appointmnet.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent, canActivate: [DoctorGuard] },
  {
    path: '',
    component: DoctorLayoutComponent, // Use the common layout for all pages except login and register
    children: [
      { path: 'home', component: HomeComponent, canActivate: [DoctorGuard] },
      {
        path: 'profile',
        component: ProfileFormComponent,
        canActivate: [DoctorGuard],
      },
      {
        path: 'appointment',
        component: AppointmnetComponent,
        canActivate: [DoctorGuard],
      },
      {
        path: 'time-slot',
        component: TimeSlotComponent,
        canActivate: [DoctorGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
