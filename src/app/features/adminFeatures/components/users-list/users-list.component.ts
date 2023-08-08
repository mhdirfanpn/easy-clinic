import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AdminService } from '../../service/admin.service';
import { UserData } from 'src/app/interface/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  user : UserData[] = []
  loader: boolean = true;


  constructor(private authService : AuthService, private adminService: AdminService) { }

  ngOnInit(): void {
    console.log(this.authService.getAdminToken())
    this.adminService.allUsers().subscribe(users=>{
      this.user = users
      this.loader = false
    })  
  }

  onCheckboxChange(id:any) {
      this.adminService.blockUser(id).subscribe()
  }
}
