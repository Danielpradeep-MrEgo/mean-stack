import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../mrego-post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './mrego-post-create.component.html',
  styleUrls: ['./mrego-post-create.component.css']

})
export class PostCreateComponent {
  enteredTitle= "";
  enteredContent = "";

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
