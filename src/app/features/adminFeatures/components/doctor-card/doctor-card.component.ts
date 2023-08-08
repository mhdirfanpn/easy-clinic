import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Doctor } from 'src/app/interface/doctor';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css'],
})
export class DoctorCardComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  @Input() doctorDetails!: Doctor;

  ngOnInit(): void {}

  //approve doctor request
  approveRequest(): void {
    if (this.doctorDetails) {
      const doctorName = this.doctorDetails.fullName;
      const confirmation = window.confirm(`Approve ${doctorName}?`);

      if (confirmation) {
        // Code to perform approval
        console.log('approved');
        this.adminService
          .verifyDoctor(this.doctorDetails._id)
          .subscribe((data: any) => {
            console.log(data);
            data.success
              ? this.router.navigate(['admin/doctors'])
              : window.alert('something went wrong');
          });
      }
    }
  }
}
