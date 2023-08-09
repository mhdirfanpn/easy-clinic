import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ADMIN_API } from 'src/app/shared/api.config';
import { ApiResponse } from 'src/app/interface/user';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/interface/user';
import { Doctor } from 'src/app/interface/doctor';
import { Appointment } from 'src/app/interface/doctor';
import { StatisticsData } from 'src/app/interface/statics';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  //admin login
  adminLogin(email: string, password: string) {
    const data = {
      email,
      password,
    };
    return this.http.post<ApiResponse>(`${ADMIN_API}/login`, data).pipe(
      tap((data) => {
        if (data.success) {
          this.authService.setAdminToken(data.adminToken);
        }
      })
    );
  }

  //get all users
  allUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${ADMIN_API}/allUsers`);
  }

  //block / unBlock users
  blockUser(id: any) {
    return this.http.get(`${ADMIN_API}/blockUser/${id}`);
  }

  //get verified doctors
  allDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${ADMIN_API}/allDoctors`);
  }

  //get doctor requests
  docRequest(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${ADMIN_API}/doctorsRequest`);
  }

  //get single doctor
  getDoctor(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${ADMIN_API}/getDoctor/${id}`);
  }

  //approve doctor request
  verifyDoctor(id: string) {
    return this.http.put(`${ADMIN_API}/verifyDoctor`, { doctorId: id });
  }

  //get all appointments
  getApppointments(): Observable<Appointment> {
    return this.http.get<Appointment>(`${ADMIN_API}/appointment`);
  }

  //get dashboard values
  getDashboard(): Observable<StatisticsData> {
    return this.http.get<StatisticsData>(`${ADMIN_API}/dashboard`);
  }
}
