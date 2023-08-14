import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../../service/doctor.service';
import { ApiResponse } from 'src/app/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | undefined;
  inputClass ='block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40';

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        'teena@gmail.com',
        [
          Validators.required,
          Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
        ],
      ],
      password: [
        'Irfan@123',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
          ),
        ],
      ],
    });
  }

  //submit login form
  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;
    }

    this.doctorService
      .loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((data: ApiResponse) => {
        !data.success ? (this.errorMessage = data.message) : '';
      });

    //reset the form after submit
    this.loginForm.reset();
  }
}
