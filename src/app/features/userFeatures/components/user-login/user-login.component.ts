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

  loginForm!: FormGroup;
  userDetails! : UserData
  errorMessage: string | undefined;
  inputClass = "block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
 
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['irfan@gmail.com', [Validators.required, Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/)]],
      password: [
        'Irfan@123',
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
    if (this.loginForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;     
    }

    this.userService.loginUser(this.loginForm.value.email,this.loginForm.value.password).subscribe((data: ApiResponse) => {
      !data.success ?  this.errorMessage = data.message : ""
    });

    //reset the form after submit
    this.loginForm.reset();
  }
}
