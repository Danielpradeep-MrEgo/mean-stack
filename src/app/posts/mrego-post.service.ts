import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { post } from './mrego-post.model';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: post[] = [];
  private postsUpdated = new Subject<post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }


  addPost(title: string, content: string) {
    const post: post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
