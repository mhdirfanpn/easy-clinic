import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  appointmnets: any = [];
  loader: boolean = true;

  //get appointments
  ngOnInit(): void {
    this.adminService.getApppointments().subscribe((data) => {
      this.appointmnets = data;
      console.log(this.appointmnets);
      this.loader = false;
    });
  }
}
