import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { ApiResponse } from 'src/app/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        'admin@gmail.com',
        [
          Validators.required,
          Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
        ],
      ],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;
    }

    this.adminService
      .adminLogin(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((data: ApiResponse) => {
        !data.success ? (this.errorMessage = data.message) : '';
      });
  }
}
