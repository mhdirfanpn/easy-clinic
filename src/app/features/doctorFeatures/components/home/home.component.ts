import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';
import { DoctorData } from 'src/app/interface/doctor';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private doctorService: DoctorService, private authService: AuthService) {}

  doctor!: DoctorData;
  loader: boolean = true;
  token: any

  //get doctor details
  ngOnInit(): void {
    this.doctorService.getDetails().subscribe((data) => {
      this.doctor = data;
      this.loader = false;
    });
  }

  //navigate to edit page
  editProfile() {
    this.router.navigate(['doctor/profile']);
  }
}
