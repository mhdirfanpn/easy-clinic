import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { StatisticsData } from 'src/app/interface/statics';

@Component({
  selector: 'app-dash-datas',
  templateUrl: './dash-datas.component.html',
  styleUrls: ['./dash-datas.component.css'],
})
export class DashDatasComponent implements OnInit {
  //dashboard data from parent component
  @Input() dashData!: StatisticsData;

  constructor() {}

  ngOnInit(): void {}
}
