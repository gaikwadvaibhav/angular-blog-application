import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  posts: Post[] = [];
  isLoading = true;

  constructor(
    private readonly router: Router,
    private readonly api: PostService) { }

  ngOnInit() {
    this.api.getPosts()
      .subscribe((res: any) => {
        this.posts = this.sortPostsByDate(res);
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
  }

  private sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort((post1, post2) => {
      return new Date(post2.createdAt).getTime() - new Date(post1.createdAt).getTime();
    });
  }

  createBlog() {
    this.router.navigateByUrl('/post/create')
   
  }

}
