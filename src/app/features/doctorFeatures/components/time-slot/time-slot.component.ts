import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../service/doctor.service';


@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  selectedTimings: string[] = [];
  selectedDate!: string;

  availableTimings = [
    { time: '10:00 AM' },
    { time: '12:00 PM' },
    { time: '2:00 PM' },
    { time: '4:00 PM' },
    { time: '6:00 PM' },
    { time: '8:00 PM' },
  ];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  handleTimingSelection(timing: string): void {
    const index = this.selectedTimings.indexOf(timing);
    if (index === -1) {
      this.selectedTimings = [...this.selectedTimings, timing];
    } else {
      this.selectedTimings = this.selectedTimings.filter((t) => t !== timing);
    }
  }

   handleSubmit() {
    if (!this.selectedDate) {
      alert("select a date")
      return;
    }


    this.doctorService.setTimeSlot(this.selectedDate,this.selectedTimings,).subscribe(data=>{
      alert("updated successfully")
    })

  }

  handleDateChange(date: string): void {
    this.selectedDate = date;
  }
}
