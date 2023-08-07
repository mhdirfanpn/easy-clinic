import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  loader : boolean = true

  constructor() { }

  ngOnInit(): void {
    //load page after the timer
    setTimeout(()=>{
      this.loader = false
    },1000)
   
  }

}
