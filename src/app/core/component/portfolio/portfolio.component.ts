import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedValue:number =1;

  constructor(
    ) { }
  ngOnInit(): void {

  }

  filterMobile()
  {
    this.selectedValue = 1;
  }
  filterWebsite()
  {
    this.selectedValue = 2;
  }
  filterWebApp()
  {
    this.selectedValue = 3;
  }
}
