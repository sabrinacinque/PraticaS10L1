import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  filteredPost: iPost[] = []
  allTags: string[] = []

  constructor(private postSvc:PostsService){}


  ngOnInit(){

    this.filteredPost = this.postSvc.posts

    this.allTags = this.postSvc.getUniqueTags()

  }

  filterByTag(event:any,tag:string){
    console.log(event);

    event.target.classList.add('activeFilter')

    this.filteredPost = this.postSvc.getPostsByTag(tag)
  }

  resetFilters(){
    this.filteredPost = this.postSvc.posts
  }

}


