import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blog={
    title: String,
    body: String
  }
  form: FormGroup;
  currentURL;
  loading=false;

  constructor(
    private location : Location,
    private activatedRoute : ActivatedRoute,
    private blogService : BlogService,
    private router : Router
  ) { }


  updateBlogSubmit(){
    this.blogService.editBlog(this.blog).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/blog']);
      },2000);
    });
  }
  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.currentURL = this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentURL.id).subscribe(data =>{
      this.blog = data.blogs;
    });
  }

}
