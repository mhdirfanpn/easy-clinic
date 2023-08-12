import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private readonly JWT_TOKEN_KEY = 'userToken';
  private readonly DOCTOR_TOKEN_KEY = 'doctorToken';
  private readonly ADMIN_TOKEN_KEY = 'adminToken';

  constructor(private router: Router) {}

  // User-related token methods
  getJwtToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN_KEY);
  }

  setJwtToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN_KEY, token);
    this.router.navigate(['/user/home']);
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  // Doctor-related token methods
  getDoctorToken(): string | null {
    return localStorage.getItem(this.DOCTOR_TOKEN_KEY);
  }

  setDoctorToken(token: string): void {
    localStorage.setItem(this.DOCTOR_TOKEN_KEY, token);
    this.router.navigate(['/doctor/home']);
  }

  isDoctorLoggedIn(): boolean {
    return !!this.getDoctorToken();
  }

  // Admin-related token methods
  getAdminToken(): string | null {
    return localStorage.getItem(this.ADMIN_TOKEN_KEY);
  }

  setAdminToken(token: string): void {
    localStorage.setItem(this.ADMIN_TOKEN_KEY, token);
    this.router.navigate(['/admin/dashboard']);
  }

  isAdminLoggedIn(): boolean {
    return !!this.getAdminToken();
  }

  // Common method to get the decoded token for all roles
  getDecodedAccessToken(role: 'user' | 'doctor' | 'admin'): any {
    try {
      let token;
      switch (role) {
        case 'user':
          token = this.getJwtToken();
          break;
        case 'doctor':
          token = this.getDoctorToken();
          break;
        case 'admin':
          token = this.getAdminToken();
          break;
        default:
          token = null;
      }

      if (!token) {
        return null;
      }

      const decodedToken = jwt_decode(token);
      return decodedToken;
    } catch (error) {
      return null;
    }
  }

  // Logout methods for all roles
  logout(role: 'user' | 'doctor' | 'admin'): void {
    switch (role) {
      case 'user':
        localStorage.removeItem(this.JWT_TOKEN_KEY);
        this.router.navigate(['/user/login']);
        break;
      case 'doctor':
        localStorage.removeItem(this.DOCTOR_TOKEN_KEY);
        this.router.navigate(['/doctor/login']);
        break;
      case 'admin':
        localStorage.removeItem(this.ADMIN_TOKEN_KEY);
        this.router.navigate(['/admin/login']);
        break;
    }
  }
}
