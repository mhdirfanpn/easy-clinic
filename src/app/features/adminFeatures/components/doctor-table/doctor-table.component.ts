import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/interface/doctor';
import { Input } from '@angular/core';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.css'],
})
export class DoctorTableComponent implements OnInit {
  @Input() doctorsData: Doctor[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  //view doctor details
  viewDoctor(id: string) {
    this.router.navigate(['/admin/docDetails', id]);
  }
}
