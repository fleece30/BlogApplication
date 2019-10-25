import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
