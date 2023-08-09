import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './service/auth.service';
import { AppointmentTableComponent } from './componet/appointment-table/appointment-table.component';
import { FirstNamePipe } from './pipe/first-name.pipe';

@NgModule({
  declarations: [AppointmentTableComponent, FirstNamePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [AppointmentTableComponent,FirstNamePipe],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
  ],
})
export class SharedModule {}
