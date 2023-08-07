import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Doctor } from 'src/app/interface/doctorData/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-cards',
  templateUrl: './doc-cards.component.html',
  styleUrls: ['./doc-cards.component.css']
})
export class DocCardsComponent implements OnInit {

  doctorDetails : Doctor[] = []

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    //fetch the doctors details
    this.userService.getDoctors().subscribe(data=>{
      this.doctorDetails = data
    })
  }

 //view single doctor
  viewDoc(id:string){
    this.router.navigate(['/user/docDetails',id])
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
