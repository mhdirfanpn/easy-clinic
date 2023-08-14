import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../../service/doctor.service';
import { ApiResponse } from 'src/app/interface/user';
import { DoctorData } from 'src/app/interface/doctor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string | undefined;
  inputClass = "block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
  
  options = [ // default options for specialization
    { value: "Cardiologist", label: "Cardiologist" },
    { value: "Dermatologist", label: "Dermatologist" },
    { value: "Neurologist", label: "Neurologist" },
    { value: "Oncologist", label: "Oncologist" },
  ]; 
 
  exp = [ //default options for experience
    { value: "0-1", label: "0-1" },
    { value: "1-2", label: "1-2" },
    { value: "2-3", label: "2-3" },
    { value: "3-4", label: "3-4" },
    { value: "above 4", label: "above 4" },
  ];

  constructor(private formBuilder: FormBuilder, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
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
      register: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
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
      specialty: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  //after submitting form
  onRegister() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;     
    }


    // create an object for doctor details
    const DoctorDetails: DoctorData = {
      fullName: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      date: this.registerForm.value.date,
      number: this.registerForm.value.number,
      password: this.registerForm.value.password,
      experience: this.registerForm.value.experience,
      register: this.registerForm.value.register,
      specialization: this.registerForm.value.specialty
    };

    this.doctorService.registerUser(DoctorDetails).subscribe((data: ApiResponse) => {
      !data.success ?  this.errorMessage = data.message : ""
    });

    //reset the form after submit
    this.registerForm.reset();
  }

}
