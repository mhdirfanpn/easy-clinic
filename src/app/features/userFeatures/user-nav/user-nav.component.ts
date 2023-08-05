import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  navbar: boolean = false; // For toggling the mobile menu
  user: boolean = false;   // Replace this with your user authentication logic

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const token = this.authService.getJwtToken()
    token ? this.user = true : this.user = false
    
  }

  handleLogout() {
    this.authService.logout();
  }

  navigateTo(path: string) {
    console.log(path)
    this.router.navigate([path]);
  }

}
