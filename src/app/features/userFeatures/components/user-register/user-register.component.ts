import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserData, ApiResponse } from 'src/app/interface/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})

export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  errorMessage: string | undefined;
  inputClass ='block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
        ],
      ],
      date: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: [
        '',
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

  //after form submission
  onRegister() {
    if (this.registrationForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;
    }

    // Constructing the userData object
    const userDetails: UserData = {
      userName: this.registrationForm.value.userName,
      email: this.registrationForm.value.email,
      date: this.registrationForm.value.date,
      number: this.registrationForm.value.number,
      password: this.registrationForm.value.password,
    };

    //register new user
    this.userService.registerUser(userDetails).subscribe((data: ApiResponse) => {
        !data.success ? (this.errorMessage = data.message) : '';
      });
    this.registrationForm.reset();
  }
}
