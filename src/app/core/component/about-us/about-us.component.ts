import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  selectedValue:number =1;
  isActive:boolean=false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }

  constructor() { }

  ngOnInit(): void {

  }
  Specific()
  {
    this.selectedValue=1;
  }
  Measurable()
  {
    this.selectedValue=2;
    this.isActive=true;
  }
  AgreedUpTo()
  {
    this.selectedValue=3;
  }

  Realistic()
  {
    this.selectedValue=4;
  }
  Timeframe()
  {
    this.selectedValue=5;
  }
}
