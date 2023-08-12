import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Appointment } from 'src/app/interface/doctor';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  appointments: Appointment[] = [];
  loader: boolean = true;

  //get appointments
  ngOnInit(): void {
    this.adminService.getApppointments().subscribe((data) => {
      this.appointments = data;
      this.loader = false;
    });
  }
}
