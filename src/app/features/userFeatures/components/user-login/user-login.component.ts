import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ApiResponse } from 'src/app/interface/user';
import { UserData } from 'src/app/interface/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  

  registrationForm!: FormGroup;
  userDetails! : UserData
  errorMessage: string | undefined;
  inputClass = "block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
 
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['realme@gmail.com', [Validators.required, Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/)]],
      password: [
        'Re@123',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/)
        ]
      ]
    });
  }

  //submit user login
  login() {
    if (this.registrationForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;     
    }

    this.userService.loginUser(this.registrationForm.value.email,this.registrationForm.value.password).subscribe((data: ApiResponse) => {
      !data.success ?  this.errorMessage = data.message : ""
    });

    //reset the form after submit
    this.registrationForm.reset();
  }
}
