import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Doctor } from 'src/app/interface/doctor';

@Component({
  selector: 'app-doc-req-list',
  templateUrl: './doc-req-list.component.html',
  styleUrls: ['./doc-req-list.component.css'],
})
export class DocReqListComponent implements OnInit {
  doctors: Doctor[] = [];
  loader: boolean = true;

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    //get doctors request
    this.adminService.docRequest().subscribe((doctors) => {
      this.doctors = doctors;
      this.loader = false;
    });
  }
}
