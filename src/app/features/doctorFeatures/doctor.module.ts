import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module'; //shared module
import { FormsModule } from '@angular/forms';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorService } from './service/doctor.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';
import { DoctorNavComponent } from './components/doctor-nav/doctor-nav.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { AppointmnetComponent } from './components/appointmnet/appointmnet.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DoctorLayoutComponent,
    DoctorNavComponent,
    ProfileFormComponent,
    AppointmnetComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [DoctorService],
})
export class DoctorModule {}
