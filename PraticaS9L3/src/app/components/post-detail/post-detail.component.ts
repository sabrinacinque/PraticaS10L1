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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postSvc: PostsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async paramMap => {
      const id = +paramMap.get('id')!;
      this.returnUrl = paramMap.get('returnUrl') || '/';

      console.log('Params:', {
        id,
        returnUrl: this.returnUrl,
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
    this.router.navigate([this.returnUrl]);
  }
}
