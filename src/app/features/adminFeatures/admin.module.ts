import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AdminLayoutComponent,
    AdminNavComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AdminService],
})
export class AdminModule {}
