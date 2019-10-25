import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent
  },
  {
    path: 'delete-blog/:id',
    component: DeleteBlogComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
