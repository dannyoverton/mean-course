import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';  // Importing our post.model.ts
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostsService) {}

  // @Output() postCreated = new EventEmitter<Post>(); // @Output allows us to emit later on
  // EventEmitter is an event? where we imported it at the top, and it collects an event from our app.component.html

  onAddPost(form: NgForm) { // The form: NgForm here referes to our form in the html
    if (form.invalid) {     // Says if the form is invalid (relating to our 'required' tags in html)
      return;
    }
    // const post: Post = {     // Post refers to our post.model.ts
    //   title: form.value.title,
    //   content: form.value.content
    this.postsService.addPost(form.value.title, form.value.content);
    // this.postCreated.emit(post); // Here we are emitting the information from the const post
    form.resetForm();
  }
}
