import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header to request
    let token: string | null = null;

    if (this.authService.isLoggedIn()) {
      token = this.authService.getJwtToken();
    } else if (this.authService.isDoctorLoggedIn()) {
      token = this.authService.getDoctorToken();
    } else if (this.authService.isAdminLoggedIn()) {
      token = this.authService.getAdminToken();
    }

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
