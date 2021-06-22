import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostService } from "src/app/services/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  blogForm: FormGroup;
  author: any;
  constructor(
    private fb: FormBuilder,
    private readonly api: PostService,
    private readonly router: Router
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.author = JSON.parse(localStorage.getItem("user"));
    this.blogForm = this.fb.group({
      id: [new Date().valueOf()],
      author: [this.author],
      heading: ["", Validators.required],
      subHeading: ["", Validators.required],
      section1: [""],
      section2: [""],
      section3: [""],
      sectionHeading: [""],
      createdAt: [new Date()],
    });
  }

  submit() {
    console.log("formGroup", this.blogForm.value);
    this.api.addPost(this.blogForm.value).subscribe((res) => {
      console.log("res", res);
      alert("Blog created!");
      this.router.navigateByUrl("/home");
    });
  }
}
