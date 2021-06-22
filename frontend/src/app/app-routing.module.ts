import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { PostDetailsComponent } from "./views/post-details/post-details.component";
import { EditCommentComponent } from "./components/edit-comment/edit-comment.component";
import { CreatePostComponent } from "./views/create-post/create-post.component";
import { LoginComponent } from "./views/login/login.component";
import { ForgetPwdComponent } from "./views/forget-pwd/forget-pwd.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "forgot-password",
    component: ForgetPwdComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "post/create",
    component: CreatePostComponent,
  },
  {
    path: "post/details/:id",
    component: PostDetailsComponent,
  },
  {
    path: "comments/:id/edit",
    component: EditCommentComponent,
  },
  {
    path: "**",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
