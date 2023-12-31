import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css'],
})
export class AppointmentTableComponent implements OnInit {

  //data from parent components
  @Input() sessions: any;
  search! : string

  onSearchChanged(searchValue: string): void {
    this.search = searchValue
  }

  constructor() {}

  ngOnInit(): void {}
}
