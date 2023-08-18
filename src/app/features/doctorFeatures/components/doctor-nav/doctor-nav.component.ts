import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfile } from '../state/profile/profile.selector';
import { DoctorData } from 'src/app/interface/doctor';


@Component({
  selector: 'app-doctor-nav',
  templateUrl: './doctor-nav.component.html',
  styleUrls: ['./doctor-nav.component.css'],
})
export class DoctorNavComponent implements OnInit {

  doctor$!: Observable<DoctorData | null>;

  constructor(private store: Store, private authService : AuthService) {}

  ngOnInit(): void {
    this.doctor$ = this.store.select(getProfile);
  }
  

  //doctor logout
  doctotorLogout() {
    this.authService.logout('doctor');
  }
}
