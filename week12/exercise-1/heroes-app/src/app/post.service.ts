import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any[];
  http = null;

  constructor(http: Http) { 
    this.http = http; 
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        console.log(response.json());
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.http.post('https://jsonplaceholder.typicode.com/posts',
      JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      });
  }

  updatePost(post): void {
    console.log(`update post: ${post.title}`);

    this.http.put("http://jsonplaceholder.typicode.com/posts" + '/' + post.id,
      JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post): void {
    this.http.delete('http://jsonplaceholder.typicode.com/posts' + '/' + post.id)
      .subscribe(response => {
        console.log(response);
      });
  }
}
