import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allCities } from 'src/app/utils/Seolist';

@Component({
  selector: 'app-iot-development',
  templateUrl: './iot-development.component.html',
  styleUrls: ['./iot-development.component.scss']
})
export class IotDevelopmentComponent implements OnInit {

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
