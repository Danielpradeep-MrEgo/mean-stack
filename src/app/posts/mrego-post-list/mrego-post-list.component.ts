import { Component, OnInit, OnDestroy } from '@angular/core';

import { post } from '../mrego-post.model';
import { PostsService } from '../mrego-post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './mrego-post-list.component.html',
  styleUrls: ['./mrego-post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  /*posts = [
    { title: "First post", content: "This is the first post's content" },
    { title: "Second post", content: "This is the second post's content" },
    { title: "Third post", content: "This is the third post's content" },
  ];
  */
  posts: post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListner()
      .subscribe((posts: post[]) =>{
        this.posts = posts;

      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
