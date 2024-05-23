import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../posts.service';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  currentPost!: iPost;
  returnUrl!: string;
  cardColor!: string;
history: any;
window: any;

  constructor(
    private route: ActivatedRoute,
    private postSvc: PostsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async paramMap => {
      const id = +paramMap.get('id')!;

      console.log('Params:', {
        id
      });

      try {
        const postTrovato = await this.postSvc.getById(id);
        console.log(postTrovato);
        if (postTrovato) {
          this.currentPost = postTrovato;
        } else {
          console.error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    });
  }

  goBack() {
    history.back();
  }
}
