import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {

  constructor() { }



  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // Chart Labels
  public barChartLabels: string[] = ['2015', '2016', '2017'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  // Chart data
  public barChartData: any[] = [
    {data: [56, 51, 43], label: 'Label 1'},
    {data: [82, 31, 89], label: 'Label 2'}
  ];

  // Chart events
  public chartClicked(e: any): void {
    console.log(e);
  }

  // Chart events
  public chartHovered(e: any): void {
    console.log(e);
  }


ngOnInit() {
}

}
