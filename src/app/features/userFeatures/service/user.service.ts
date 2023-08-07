import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserData } from 'src/app/interface/userData/user';
import { ApiResponse } from 'src/app/interface/userData/user';
import { USER_API } from 'src/app/shared/api.config';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/interface/doctorData/doctor';
import { AuthService } from './auth.service';

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

  loginUser(email: string, password: string){
    const data = {
      email,
      password
    };
    return this.http.post<ApiResponse>(`${USER_API}/login`,data).pipe(
      tap((data) => {
        if (data.success) {
          this.authService.setJwtToken(data.token);
        }
      })
    );
  }

  getDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${USER_API}/allDoctors`)
    
  }

  getDocDetails(id:string):Observable<Doctor>{
    return this.http.get<Doctor>(`${USER_API}/getDoctor/${id}`)
  }

  getUserDetails(id:any):Observable<any>{
    return this.http.get<any>(`${USER_API}/details/${id}`)
  }

  updateProfileImg(formData:string,id:any):Observable<any>{
    console.log(id)
    return this.http.put<any>(`${USER_API}/updateUserImage/${id}`, formData)
  }

  updateProfile(body:string,id:any):Observable<any>{
    console.log(id)
    return this.http.put<any>(`${USER_API}/updateDetails/${id}`, body)
  }
}


// updateDetails

