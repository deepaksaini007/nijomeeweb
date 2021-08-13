import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allCities } from 'src/app/utils/Seolist';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss']
})
export class SoftwareDevelopmentComponent implements OnInit {
  city:string="Rohtak"
  constructor( private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.url.subscribe(url=>{

      const cityName = url.join("").split("-").slice(-1).pop()
    
      if(cityName && allCities.includes(cityName)){
        this.city = cityName;
      }else{
        this.city = "Rohtak";
      }
    })
  }

}
