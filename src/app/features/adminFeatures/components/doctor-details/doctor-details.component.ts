import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { Doctor } from 'src/app/interface/doctor';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private adminService: AdminService
  ) {}

  getParamId!: string;
  doctor!: Doctor;
  loader: boolean = true;

  //getting doctor details
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.getParamId = params.get('id')!;
      this.adminService.getDoctor(this.getParamId).subscribe((doctor) => {
        this.doctor = doctor;
        this.loader = false;
      });
    });
  }
}
