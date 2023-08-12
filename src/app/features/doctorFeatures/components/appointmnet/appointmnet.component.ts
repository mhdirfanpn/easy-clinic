import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../service/doctor.service';
import { Appointment } from 'src/app/interface/doctor';

@Component({
  selector: 'app-appointmnet',
  templateUrl: './appointmnet.component.html',
  styleUrls: ['./appointmnet.component.css'],
})
export class AppointmnetComponent implements OnInit {
  
  constructor(private doctorService: DoctorService) {}

  appointment: Appointment[] = [];
  
  loader: boolean = true;

  //get appointments
  ngOnInit(): void {
    this.doctorService.getAppointment().subscribe((data) => {
      this.appointment = data;
      this.loader = false;
    });
  }
}
