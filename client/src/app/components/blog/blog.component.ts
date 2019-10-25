import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  newBlog=false;
  loadingBlogs=false;
  form: FormGroup;
  username; 
  messageClass;
  message;
  blogPosts;
  blogs={
    title: String,
    body: String
  }
  commentForm;
  enabledComments = [];

  newComment = [];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private blogService: BlogService
  ) {
    this.newBlogForm();
    this.createCommentForm();
   }

  newBlogForm(){
    this.form=this.formBuilder.group({
      title: '',
      body: ''
    });
  }

  createCommentForm(){
    this.commentForm = this.formBuilder.group({
      comment: ''
    });
  }

  newPost(){
    this.newBlog=true;
  }
  reloadPosts(){
    this.loadingBlogs=true;
    this.getAllBlogs();
    setTimeout(()=>{
      this.loadingBlogs=false; 
    },4000);
  }

  draftComment(id){
    this.newComment = [];
    this.newComment.push(id);
  }

  cancel(id){
    const index = this.newComment.indexOf(id);
    this.newComment.splice(index,1);
    this.commentForm.reset();
  }

  expand(id){
    this.enabledComments.push(id);
  }

  collapse(id){
    const index = this.enabledComments.indexOf(id);
    this.enabledComments.splice(index,1);
  }

  goBack(){
    window.location.reload();
  }

  onBlogSubmit(){
    const blog = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: this.username
    }

    this.blogService.newBlog(blog).subscribe(data => {
      this.getAllBlogs();
        setTimeout(()=>{
          this.newBlog=false;
          this.form.reset();
        },2000)
    });

  }

  postComment(id){
    const comment = this.commentForm.get('comment').value;
    this.blogService.postComment(id, comment, this.username).subscribe(data => {
      this.getAllBlogs();
      const index = this.newComment.indexOf(id);
      this.newComment.splice(index, 1);
      this.commentForm.reset();
      if (this.enabledComments.indexOf(id) < 0) this.expand(id);
    });
  }

  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
    })
  }

  likeBlog(id){
    this.blogService.likeBlog(id,this.username).subscribe(data => {
       this.getAllBlogs();
    });
  }

  dislikeBlog(id){
    this.blogService.dislikeBlog(id, this.username).subscribe(data => {
       this.getAllBlogs();
    });
  }

  ngOnInit() {
    var returned=localStorage.getItem('user');
    var parsed=JSON.parse(returned);
    this.username=parsed.username;
    this.getAllBlogs();
  }

}
