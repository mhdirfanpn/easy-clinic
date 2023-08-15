import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../service/doctor.service';

<<<<<<< HEAD
@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css'],
})
export class TimeSlotComponent implements OnInit {
  
  selectedTimings: string[] = [];
  selectedDate!: string;
  loader : Boolean = true

  //available timings
=======

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  selectedTimings: string[] = [];
  selectedDate!: string;

>>>>>>> payment
  availableTimings = [
    { time: '10:00 AM' },
    { time: '12:00 PM' },
    { time: '2:00 PM' },
    { time: '4:00 PM' },
    { time: '6:00 PM' },
    { time: '8:00 PM' },
  ];

<<<<<<< HEAD
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    setTimeout(()=>{
      this.loader = false
    },1000)
  }

  //handle timing when doctor select the times using check box
=======
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

>>>>>>> payment
  handleTimingSelection(timing: string): void {
    const index = this.selectedTimings.indexOf(timing);
    if (index === -1) {
      this.selectedTimings = [...this.selectedTimings, timing];
    } else {
      this.selectedTimings = this.selectedTimings.filter((t) => t !== timing);
    }
  }

<<<<<<< HEAD
  //submit the selected time
  handleSubmit() {
    if (!this.selectedDate) {
      alert('select a date');
      return;
    }

    this.doctorService
      .setTimeSlot(this.selectedDate, this.selectedTimings)
      .subscribe((data) => {
        alert('updated successfully');
      });
  }

  //change the date for appoiment availability
=======
   handleSubmit() {
    if (!this.selectedDate) {
      alert("select a date")
      return;
    }


    this.doctorService.setTimeSlot(this.selectedDate,this.selectedTimings,).subscribe(data=>{
      alert("updated successfully")
    })

  }

>>>>>>> payment
  handleDateChange(date: string): void {
    this.selectedDate = date;
  }
}
