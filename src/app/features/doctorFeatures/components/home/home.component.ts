import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorData } from 'src/app/interface/doctor';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfile } from '../state/profile/profile.selector';
import { loadDocProfile } from '../state/profile/profile.action';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private store : Store) {}

  doctor$!: Observable<DoctorData | null>;
  loader: boolean = true;

  //get doctor details
  ngOnInit(): void {
    this.doctor$ = this.store.select(getProfile);


    this.store.dispatch(loadDocProfile());
    this.timeOut()
  }

  //navigate to edit page
  editProfile() {
    this.router.navigate(['doctor/profile']);
  }


  timeOut(){
    setTimeout(()=>{
      this.loader = false
    },700)

  }
}
