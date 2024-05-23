import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  postArr: iPost[] = [];

  constructor(
    private postSvc: PostsService) {}

  ngOnInit() {
    this.postSvc.getPostsTrueOrFalse(true).then(posts => {
      this.postArr = posts;
      console.log(this.postArr); 
    }).catch(error => {
      console.error('Error fetching active posts:', error);
    });
  }

}
