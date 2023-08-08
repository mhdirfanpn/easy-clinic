import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { ADMIN_API } from 'src/app/shared/api.config';
import { ApiResponse } from 'src/app/interface/user';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/interface/user';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient, private authService: AuthService, private router: Router) { }


  adminLogin(email: string, password: string){
    const data = {
      email,
      password
    };
    return this.http.post<ApiResponse>(`${ADMIN_API}/login`,data).pipe(
      tap((data) => {
        if (data.success) {
          console.log(data)
          this.authService.setAdminToken(data.adminToken);
        }
      })
    );
  }

  allUsers():Observable<UserData[]>{
    return this.http.get<UserData[]>(`${ADMIN_API}/allUsers`) 
  }

  blockUser(id:any){
    return this.http.get(`${ADMIN_API}/blockUser/${id}`)
  }

}


