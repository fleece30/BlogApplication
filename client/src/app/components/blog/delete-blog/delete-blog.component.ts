import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {


  foundBlog = false;
  blog={
    title: String,
    body: String
  }
  currentURL;
  constructor(
    private blogService : BlogService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  deleteBlog(){
    this.blogService.deleteBlog(this.currentURL.id).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/blog']);
      },2000);
    });
  }

  ngOnInit() {
    this.currentURL = this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentURL.id).subscribe(data => {
      this.blog = data.blogs;
      this.foundBlog = true;
    });
  }

}
