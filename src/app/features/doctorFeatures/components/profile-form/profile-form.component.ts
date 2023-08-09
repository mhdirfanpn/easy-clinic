import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorData } from 'src/app/interface/doctor';
import { DoctorService } from '../../service/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
  ) {}

  registerForm!: FormGroup;
  loader: Boolean = true;
  doctor!: DoctorData;
  errorMessage: string | undefined;
  formdata: any;
  token : any

  ngOnInit(): void {
    this.getDetails();
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
        ],
      ],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      experience: [
        '',
        [Validators.required, Validators.pattern(/^\d{1,2}-\d{1,2}$/)],
      ],
    });
  }

  //get doctor details
  getDetails() {
    this.doctorService.getDetails().subscribe((data) => {
      this.doctor = data;
      this.loader = false;

      //set form default values
      this.registerForm.patchValue({
        name: this.doctor.fullName,
        email: this.doctor.email,
        number: this.doctor.number,
        experience: this.doctor.experience,
      });
    });
  }

  //submit updated details
  onUpdate() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;
    }

    //create object for doctor details
    const DoctorDetails: DoctorData = {
      fullName: this.registerForm.value.name,
      email: this.registerForm.value.email,
      date: this.registerForm.value.date,
      number: this.registerForm.value.number,
      experience: this.registerForm.value.experience,
    };



    this.doctorService
      .updateDetails(DoctorDetails)
      .subscribe((data: DoctorData) => {
        !data.success ? (this.errorMessage = data.message) : '';
        this.router.navigate(['doctor/home']);
      });
  }

    //update doctor profile image
    onImageSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        this.formdata = new FormData();
        this.formdata.append('image', file);
        this.loader = true;
        this.doctorService
          .updateProfileImage(this.formdata)
          .subscribe((response) => {
            this.doctor = response;
            this.loader = false;
            this.router.navigate(['doctor/home']);
          });
      }
    }
}
