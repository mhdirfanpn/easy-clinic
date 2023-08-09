import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DoctorService } from '../../service/doctor.service';
import { Doctor } from 'src/app/interface/doctor';

@Component({
  selector: 'app-doctor-nav',
  templateUrl: './doctor-nav.component.html',
  styleUrls: ['./doctor-nav.component.css'],
})
export class DoctorNavComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private doctorService: DoctorService
  ) {}

  doctor!: Doctor;

  //get doctor details
  ngOnInit(): void {
    this.doctorService.getDetails().subscribe((data) => (this.doctor = data));
  }

  //doctor logout
  doctotorLogout() {
    this.authService.logout('doctor');
  }
}
