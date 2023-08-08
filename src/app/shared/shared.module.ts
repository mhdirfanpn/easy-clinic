import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './service/auth.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService
  ],
})
export class SharedModule { }
