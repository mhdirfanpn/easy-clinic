import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN_KEY = 'userToken';

  constructor(private router: Router) {}

  //get token
  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN_KEY);
  }

  //set token
  setJwtToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN_KEY, token);
    this.router.navigate(['/user/home']);
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  //logout user, remove token
  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN_KEY);
    this.router.navigate(['/user/login']);
  }

  //decode token
  getDecodedAccessToken(): any {
    try {
      const token = this.getJwtToken();
      if (!token) {
        return null;
      }
      const decodedToken = jwt_decode(token);
      return decodedToken;
    } catch (error) {
      return null;
    }
  }
}
