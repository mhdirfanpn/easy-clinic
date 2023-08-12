import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Appointment } from 'src/app/interface/doctor';

@Component({
  selector: 'app-appointmnet',
  templateUrl: './appointmnet.component.html',
  styleUrls: ['./appointmnet.component.css']
})
export class AppointmnetComponent implements OnInit {

  constructor(private userService: UserService) { }

  appointment : Appointment[] = []
  loader: boolean = true

  ngOnInit(): void {
    //get the user appointment
    this.userService.getAppointment().subscribe(data=>{
      this.appointment = data
      console.log(data)
      this.loader = false
    })
  }

}
