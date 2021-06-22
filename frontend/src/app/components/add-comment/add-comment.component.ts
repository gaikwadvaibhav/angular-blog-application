import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { CommentService } from '../../services/comment.service';
import { Post } from '../../model/post';
import { Comment } from '../../model/comment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Input() post: Post;
  comment: Comment;
  commentForm: FormGroup;
  user:any;

  constructor(private api: CommentService, private router: Router, private modalService: NgbModal) {
    this.comment = new Comment();
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      content: new FormControl('', [Validators.required]),
      user: new FormControl(this.user, [Validators.required])
    });
  }

  addComment() {
    this.comment = this.commentForm.value;
    this.comment.date = this.formatCurrentDate();
    this.api.addCommentByPostId(this.comment, this.post.id)
      .subscribe(() => {
        this.modalService.dismissAll();
        this.refresh();
        this.router.navigate(['post/details/', this.post.id]);
      }, error => console.log(error));
  }

  private refresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }

  private formatCurrentDate(): string {
    const current: Date = new Date();
    let strMonth = (current.getMonth() + 1).toString();
    let strDay = current.getDate().toString();
    if (current.getMonth() + 1 < 10) {
      strMonth = '0' + strMonth;
    }
    if (current.getDate() < 10) {
      strDay = '0' + strDay;
    }
    return current.getFullYear() + '-' + strMonth + '-' + strDay;
  }

  closeModal() {
    this.modalService.dismissAll();
 }

}
