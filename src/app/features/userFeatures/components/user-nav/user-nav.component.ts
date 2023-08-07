import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  navbar: boolean = false; // For toggling the mobile menu
  user: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    //get the top when navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    const token = this.authService.getJwtToken();
    token ? (this.user = true) : (this.user = false);
  }

  //user logout
  handleLogout() {
    this.authService.logout();
  }

  //navigate to respective paths
  navigateTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
}
