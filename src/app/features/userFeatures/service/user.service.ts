import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserData } from 'src/app/interface/userData/user';
import { ApiResponse } from 'src/app/interface/userData/user';
import { USER_API } from 'src/app/shared/api.config';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private authService: AuthService, private router: Router) { }

  registerUser(userDetails:UserData){
      return this.http.post<ApiResponse>(`${USER_API}/signup`,userDetails).pipe(
        tap((data) => {
          data.success ? this.router.navigate(['/user/login']) : ""
        })
      );
  }

  loginUser(userDetails:UserData){
    return this.http.post<ApiResponse>(`${USER_API}/login`,userDetails).pipe(
      tap((data) => {
        if (data.success) {
          this.authService.setJwtToken(data.token);
        }
      })
    );
  }

  getDoctors():Observable<any>{
    return this.http.get<any>(`${USER_API}//allDoctors`)
    
  }
}
