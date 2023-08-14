import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { DoctorTableComponent } from './components/doctor-table/doctor-table.component';
import { DocReqListComponent } from './components/doc-req-list/doc-req-list.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashDatasComponent } from './components/dash-datas/dash-datas.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminLayoutComponent,
    AdminNavComponent,
    UsersListComponent,
    DoctorsListComponent,
    DoctorDetailsComponent,
    DoctorCardComponent,
    DoctorTableComponent,
    DocReqListComponent,
    AppointmentListComponent,
    DashboardComponent,
    DashDatasComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [AdminService],
})
export class AdminModule {}
