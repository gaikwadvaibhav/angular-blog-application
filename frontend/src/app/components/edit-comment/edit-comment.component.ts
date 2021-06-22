import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CommentService } from '../../services/comment.service';

import { Comment } from '../../model/comment';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  comment: Comment;
  commentForm: FormGroup;
  isLoading = true;
  isSuccess = false;

  constructor(private api: CommentService, private route: ActivatedRoute, private location: Location) {
    this.comment = new Comment();
  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      id: new FormControl(''),
      postId: new FormControl(''),
      content: new FormControl('', [Validators.required])
    });
    this.getCommentById(this.route.snapshot.params.id);
  }

  getCommentById(id: any) {
    this.api.getCommentById(id)
      .subscribe((res) => {
        this.commentForm.setValue({
          id: res.id,
          postId: res.postId,
          content: res.content
        });
        this.comment = res;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }

  save() {
    this.isLoading = true;
    const commentId = this.route.snapshot.params.id;
    this.comment.content = this.commentForm.value.content;
    this.api.updateComment(commentId, this.comment)
      .subscribe((res) => {
        this.isSuccess = true;
        setTimeout(() => { this.isSuccess = false; }, 3000);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  goBack() {
    this.location.back();
  }

}
