import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DoctorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (this.authService.isDoctorLoggedIn()) {
        // Authenticated user - allow access to the requested route
        // Redirect to home page if the requested route is '/login'
        if (state.url === '/doctor/login') {
          this.router.navigate(['/doctor/home']);
          return false;
        }
        return true;
      } else {
        // Not authenticated user - redirect to the login page
        if (state.url !== '/doctor/login') {
          this.router.navigate(['/doctor/login']);
          return false;
        }
      } 
    return true;
  }
}
