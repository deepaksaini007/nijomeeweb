import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {  blogData, blogList, blogTitle } from 'src/app/utils/blogs';

@Component({
  selector: 'app-nijomee-blog',
  templateUrl: './nijomee-blog.component.html',
  styleUrls: ['./nijomee-blog.component.scss']
})
export class NijomeeBlogComponent implements OnInit {
  Title!:string;
  blogDatas:blogList[]=[];
  constructor( private route:ActivatedRoute,) { }

  ngOnInit(): void {
   const blogURL =this.route.snapshot.url[1].path;

     // const blogURL =this.route.snapshot.url[1].path;
  //  if(blogTitle.includes(blogTitle)){
  //   this.Title=blogTitle;
    this.blogDatas=blogData.filter(x=>x.url===blogURL)

  }
}
