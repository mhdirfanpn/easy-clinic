import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-doctor-nav',
  templateUrl: './doctor-nav.component.html',
  styleUrls: ['./doctor-nav.component.css'],
})
export class DoctorNavComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  //doctor logout
  doctotorLogout() {
    this.authService.logout('doctor');
  }
}
