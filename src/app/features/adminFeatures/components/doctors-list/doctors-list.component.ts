import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Doctor } from 'src/app/interface/doctor';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})

export class DoctorsListComponent implements OnInit {
  doctors: Doctor[] = [];
  loader: boolean = true;

  constructor(private adminService: AdminService) {}

  //get verified doctors
  ngOnInit(): void {
    this.adminService.allDoctors().subscribe((doctors) => {
      this.doctors = doctors;
      this.loader = false;
    });
  }
}
