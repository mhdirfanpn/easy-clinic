import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/interface/user';
import { ApiResponse } from 'src/app/interface/user';
import { USER_API} from 'src/app/shared/api.config';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor, DoctorData } from 'src/app/interface/doctor';
import { Appointment } from 'src/app/interface/doctor';
import { AuthService } from 'src/app/shared/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}


  timeArray: string[] = [];
  
  //get user details from token
  getUser(){
    return this.authService.getDecodedAccessToken('user')
  }


  //register new user
  registerUser(userDetails: UserData) {
    return this.http.post<ApiResponse>(`${USER_API}/signup`, userDetails).pipe(
      tap((data) => {
        data.success ? this.router.navigate(['/user/login']) : '';
      })
    );
  }


  //user login
  loginUser(email: string, password: string) {
    const data = {
      email,
      password,
    };
    return this.http.post<ApiResponse>(`${USER_API}/login`, data).pipe(
      tap((data) => {
        if (data.success) {
          this.authService.setJwtToken(data.token);
        }
      })
    );
  }


  //get all verified doctors
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${USER_API}/allDoctors`);
  }


  //get doctor details
  getDocDetails(doctorId: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${USER_API}/getDoctor/${doctorId}`);
  }


  //get the login user details
  getUserDetails(): Observable<UserData> {
    const user = this.getUser()
    console.log("hello")
    return this.http.get<UserData>(`${USER_API}/details/${user.id}`);
  }


  //update user profile image
  updateProfileImg(formData: string): Observable<any> {
    const user = this.getUser()
    return this.http.put<any>(`${USER_API}/updateUserImage/${user.id}`, formData);
  }


  //update user profile details
  updateProfile(body: string): Observable<UserData> {
    const user = this.getUser()
    return this.http.put<UserData>(`${USER_API}/updateDetails/${user.id}`, body);
  }


  //get user appoinments
  getAppointment(): Observable<Appointment[]> {
    const user = this.getUser()
    return this.http.get<Appointment[]>(`${USER_API}/getSession/${user.id}`);
  }


  //get the appoiment time 
  getTime(date:string,id:string): Observable<any>{
    console.log(date,id)
    const body = {
      date,
      id
    }
    return this.http.post<any>(`${USER_API}/getTime`,body);
  }


  //check availabilty for appoiment
  checkAvailable(date:string,time:string,id:string){
    const user = this.getUser();
    const body = {
      date: date,
      time: time,
      doctorId: id,
      userId: user.id 
    };
    return this.http.post<any>(`${USER_API}/availability`,body);
  }


  //book session
  bookSession(doctorDetails:DoctorData,date:string,time:string,plan:string){
    const body = {
      doctorDetails,
      date,
      time,
      plan,
      userData: this.getUser()
    }
    return this.http.post<any>(`${USER_API}/book_session`,body);
  }


  //add appoiment
  appoinment(doctorDetails:DoctorData,date:string,time:string){
    const body = {
      doctorDetails,
      date,
      time
    }
    return this.http.post<any>(`${USER_API}/appointment`,body);
  }


}

