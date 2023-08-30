import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Doctor } from 'src/app/interface/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css'],
})
export class DocDetailsComponent implements OnInit {
  
  docDetails!: Doctor;
  getParamId: string = '';
  imageUrl: string = '';
  isLoading: boolean = true;
  selectedDate: string = '';
  loader: boolean = true;
  showTime: boolean = false;
  timeArray: string[] = [];
  availble: boolean = false;
  time!: string;

  //disable the past date
  getToday(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  constructor(
    private activeRouter: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //getting the doctor id from the previous router
    this.activeRouter.paramMap.subscribe((params) => {
      this.getParamId = params.get('id')!;
    });
    //fetch single doctor
    this.userService.getDocDetails(this.getParamId).subscribe((data) => {
      this.docDetails = data;
      console.log(data)
      this.loader = false;
    });
  }

  //after selecting date getting the available time for appoinment
  onDateChange(): void {
    this.showTime = !this.showTime;
    this.userService
      .getTime(this.selectedDate, this.docDetails._id)
      .subscribe((data) => {
        console.log(data);
        this.timeArray = data;
      });
  }

  //after select the time
  handleButtonClick(t: string) {
    this.time = t;
    console.log(t, this.selectedDate, this.docDetails._id);
    this.userService
      .checkAvailable(this.selectedDate, t, this.docDetails._id)
      .subscribe((data) => {
        console.log(data.message);
        if (data.message === 'available') {
          this.availble = true;
        } 
      });
  }

  //go to the payment page
  bookAppoiment() {
    const data = {
      time: this.time,
      date: this.selectedDate,
      doctorId: this.docDetails._id,
    };
    this.router.navigate([
      '/user/payment',
      { objectData: JSON.stringify(data) },
    ]);
  }
}
