import { Component, OnInit } from '@angular/core';
import { blogList,blogData } from 'src/app/utils/blogs';

export enum BlogTypes {
  All,
  App,
  Web,
  Digital,
  other,
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
public filter :string= "all";
selectedValue:number =1;
blogDatas:blogList[]=[];
public AllBlogTypes=BlogTypes;
public currentBoard = BlogTypes.All;
isActive:boolean =true;

  constructor() { }
  changeBoard(type: BlogTypes) {
    this.currentBoard = type;

    switch(type)
    {
    case BlogTypes.All:
       this.blogDatas=blogData
      break;
      case BlogTypes.Web:
        this.blogDatas=blogData.filter(p=> p.category == "web")
      break;
      case BlogTypes.App:
        this.blogDatas=blogData.filter(p=> p.category == "app")
        break;
        case BlogTypes.Digital:
         this.blogDatas=blogData.filter(p=> p.category == "digital")
         break;
    default:
      this.blogDatas=blogData
      break;
    }
  }
  ngOnInit(): void {

    this.blogDatas=blogData

  }

}
