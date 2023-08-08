import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService, private adminService: AdminService) { }

  ngOnInit(): void {
    console.log(this.authService.getAdminToken())
    this.adminService.allUsers().subscribe(users=>console.log(users))
    
  }

}
