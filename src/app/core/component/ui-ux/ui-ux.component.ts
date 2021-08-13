import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allCities } from 'src/app/utils/Seolist';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent implements OnInit {

  city:string="Rohtak"
  title="UI/Ux Designer Company in Rohtak, India | Nijomee Technologies";
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
