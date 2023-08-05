import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserData, ApiResponse } from 'src/app/interface/userData/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  registrationForm!: FormGroup;
  errorMessage: string | undefined;

  inputClass = "block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
 
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/)
        ]
      ]
    });
  }

  login() {
    if (this.registrationForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;     
    }

    const userDetails: UserData = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    };

    this.userService.loginUser(userDetails).subscribe((data: ApiResponse) => {
      console.log(data);
      if (!data.success) {
        this.errorMessage = data.message;
      } else {
        // Handle success case if needed
        console.log(data);
        this.route.navigate(['/user/home'])
      }
    });

  this.registrationForm.reset();
  }
}
