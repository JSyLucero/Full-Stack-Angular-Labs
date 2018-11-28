import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  http = null;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }
}
