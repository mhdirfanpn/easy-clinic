import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/interface/user';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user!: UserData | undefined;
  userId!: string;
  formdata: any;
  loader: boolean = true;
  updateForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //get the user details
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserDetails(userId).subscribe((data) => {
      this.user = data;
      this.loader = false;

      // Initialize the updateForm after getting user details
      this.updateForm = this.formBuilder.group({
        userName: [
          this.user?.userName,
          [Validators.required, Validators.minLength(4)],
        ],
        number: [
          this.user?.number,
          [Validators.required, Validators.pattern(/^\d{10}$/)],
        ],
        email: [
          this.user?.email,
          [
            Validators.required,
            Validators.pattern(/^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/),
          ],
        ],
      });
    });
  }

  //update user profile image
  onImageSelected(event: any, id: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.formdata = new FormData();
      this.formdata.append('image', file);
      this.loader = true;
      this.userService
        .updateProfileImg(this.formdata, id)
        .subscribe((response) => {
          this.user = response;
          this.loader = false;
          this.router.navigate(['user/profile']);
        });
    }
  }

  //update user details
  updateDetails(id: any) {
    if (this.updateForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;
    }
    this.loader = true;
    this.userService.updateProfile(this.updateForm.value, id).subscribe();
    setTimeout(() => {
      this.loader = false;
      this.router.navigate(['user/profile']);
    }, 2000);
  }
}
