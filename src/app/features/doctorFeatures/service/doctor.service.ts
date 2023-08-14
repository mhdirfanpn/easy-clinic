import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DOCTOR_API } from 'src/app/shared/api.config';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ApiResponse } from 'src/app/interface/user';
import { DoctorData } from 'src/app/interface/doctor';
import { Appointment } from 'src/app/interface/doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}


  //get the doctor data from token
  getDoctor() {
    return this.authService.getDecodedAccessToken('doctor');
  }


  //registe new doctor
  registerUser(DoctorDetails: DoctorData) {
    return this.http
      .post<ApiResponse>(`${DOCTOR_API}/signup`, DoctorDetails)
      .pipe(
        tap((data) => {
          data.success ? this.router.navigate(['/doctor/login']) : '';
        })
      );
  }


  //doctor login
  loginUser(email: string, password: string) {
    const data = {
      email,
      password,
    };
    return this.http.post<ApiResponse>(`${DOCTOR_API}/login`, data).pipe(
      tap((data) => {
        if (data.success) {
          this.authService.setDoctorToken(data.doctorToken);
        }
      })
    );
  }


  //get doctor details
  getDetails(): Observable<DoctorData> {
    const doctor = this.getDoctor();
    return this.http.get<DoctorData>(`${DOCTOR_API}/details/${doctor.id}`);
  }


  //update doctor detials
  updateDetails(doctorDetails: DoctorData): Observable<DoctorData> {
    const doctor = this.getDoctor();
    return this.http.put<DoctorData>(
      `${DOCTOR_API}/updateDetails/${doctor.id}`,
      doctorDetails
    );
  }


  //upgate doctor image
  updateProfileImage(formData: string): Observable<DoctorData> {
    const doctor = this.getDoctor();
    return this.http.put<DoctorData>(
      `${DOCTOR_API}/updateDoctorImage/${doctor.id}`,
      formData
    );
  }

  
  //get doctor appointments
  getAppointment(): Observable<Appointment[]> {
    const doctor = this.getDoctor();
    return this.http.get<Appointment[]>(`${DOCTOR_API}/appointment/${doctor.id}`);
  }
}
