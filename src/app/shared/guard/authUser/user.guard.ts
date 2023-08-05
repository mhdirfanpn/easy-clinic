import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/userFeatures/service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isLoggedIn()) {
      // Authenticated user - allow access to the requested route
      // Redirect to home page if the requested route is '/login'
      if (state.url === '/user/login') {
        this.router.navigate(['/user/home']);
        return false;
      }
      return true;
    } else {
      // Not authenticated user - redirect to the login page
      if (state.url !== '/user/login') {
        this.router.navigate(['/user/login']);
        return false;
      }
      
    }
    return true;
  }
}
