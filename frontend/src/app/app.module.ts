import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PostDetailsComponent } from './views/post-details/post-details.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
// Bootstrap module components
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { LoginComponent } from './views/login/login.component';
import { ForgetPwdComponent } from './views/forget-pwd/forget-pwd.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent,
    CommentComponent,
    AddCommentComponent,
    EditCommentComponent,
    CreatePostComponent,
    LoginComponent,
    ForgetPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule, NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService, CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
