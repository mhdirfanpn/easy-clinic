import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AdminService } from '../../service/admin.service';
import { UserData } from 'src/app/interface/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  user: UserData[] = [];
  loader: boolean = true;

  constructor(
    private adminService: AdminService
  ) {}

  //get all users
  ngOnInit(): void {
    this.adminService.allUsers().subscribe((users) => {
      this.user = users;
      this.loader = false;
    });
  }

  //block / unBlock user
  onCheckboxChange(id: any) {
    this.adminService.blockUser(id).subscribe();
  }
}
