import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { StatisticsData } from 'src/app/interface/statics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  statics!: StatisticsData;
  loader: boolean = true;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    //getting dashboard data
    this.adminService.getDashboard().subscribe((data) => {
      this.statics = data;
      this.loader = false;
      console.log(this.statics);
    });
  }
}
