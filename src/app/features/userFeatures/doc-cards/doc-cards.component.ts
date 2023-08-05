import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-doc-cards',
  templateUrl: './doc-cards.component.html',
  styleUrls: ['./doc-cards.component.css']
})
export class DocCardsComponent implements OnInit {

  doctorDetails : any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getDoctors().subscribe(data=>{
      this.doctorDetails = data.doctors
      console.log(this.doctorDetails)
    })
  }

  @ViewChild('wrapperRef') wrapperRef!: ElementRef;
  scrollStep = 450; // Adjust this value as needed for smoothness

  scrollLeft(): void {
    this.wrapperRef.nativeElement.scrollLeft -= this.scrollStep;
  }

  scrollRight(): void {
    this.wrapperRef.nativeElement.scrollLeft += this.scrollStep;
  }

}
