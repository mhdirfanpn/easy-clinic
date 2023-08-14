import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserData } from 'src/app/interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  token: any;
  user!: UserData;
  loader: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //fetch the userDetails
    this.userService.getUserDetails().subscribe((data) => {
      this.user = data;
      this.loader = false;
    });
  }

  goToEditPage() {
    // Navigate to the edit page and pass the 'user' object as a route parameter
    this.router.navigate(['/user/editDetails']);
  }
}
