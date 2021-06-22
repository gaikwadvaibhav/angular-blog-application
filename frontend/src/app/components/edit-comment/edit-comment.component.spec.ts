import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EditCommentComponent } from './edit-comment.component';

describe('EditCommentComponent', () => {
  let component: EditCommentComponent;
  let fixture: ComponentFixture<EditCommentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCommentComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('should update a comment', () => {
    component.comment = { id: 5, user: 'Axel Rose', date: '02-02-2020', postId: 1, content: 'Welcome to the jungle!', parent_id: null };
    component.commentForm.controls.content.setValue('Sweet Child of Mine');
    component.save();
    expect(component.comment).toEqual(jasmine.objectContaining({ content: 'Sweet Child of Mine' }));
  });

});
