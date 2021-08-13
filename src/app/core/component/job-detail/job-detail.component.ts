import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobDetails } from 'src/app/utils/job-details';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
Title!:string
  constructor( private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.url.subscribe(url=>{

      const jobTitle = url.join("").split("-")[2]
      const jobType = url.join("").split("-")[3]

      this.Title = jobTitle +" "+ jobType;

    })
  }

}
