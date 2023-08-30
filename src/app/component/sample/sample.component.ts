import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  loginForm! : FormGroup
  name : string = ""

  tableData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bob' },
  ];

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name : ["",[Validators.required, Validators.minLength(4)]]
    })
  }

  submitForm(){
   console.log( this.loginForm)
  }

 
}
