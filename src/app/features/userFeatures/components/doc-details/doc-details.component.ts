import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Doctor } from 'src/app/interface/doctor';

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

  //disable the past date
  getToday(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.getParamId = params.get('id')!;
    });
    //fetch single doctor
    this.userService.getDocDetails(this.getParamId).subscribe((data) => {
      this.docDetails = data;
      this.loader = false;
    });
  }

  onDateChange(): void {
    console.log('Selected date:', this.selectedDate);
  }
}
