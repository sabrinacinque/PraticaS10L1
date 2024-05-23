import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  postArr: iPost[] = [];

  constructor(
    private postSvc: PostsService) {}

  ngOnInit() {
    this.postSvc.getPostsTrueOrFalse(false).then(posts => {
      this.postArr = posts;
      console.log(this.postArr);
    }).catch(error => {
      console.error('Error fetching active posts:', error);
    });
  }

}
