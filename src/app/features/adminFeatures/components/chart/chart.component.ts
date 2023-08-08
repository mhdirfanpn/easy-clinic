import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { StatisticsData } from 'src/app/interface/statics';

interface RevenueData {
  revenue: number;
  month: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, AfterViewInit {
  //dashboard data from parent component
  @Input() dashData!: StatisticsData;

  constructor() {}

  public chart: any;
  public revenueData: RevenueData[] = [];

  ngOnInit(): void {
    this.revenueData = this.dashData.revenue;
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const revenueValues = this.revenueData.map((item) => item.revenue);
    const monthLabels = this.revenueData.map((item) => months[item.month - 1]);

    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: 'Revenue by month',
            data: revenueValues,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
