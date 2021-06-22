import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { CommentComponent } from './comment.component';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponent, EditCommentComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should remove comment upon button click', () => {
    component.comment = { id: 10, postId: 1, parent_id: null, date: null, user: null, content: 'This is a fresh comment' };
    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('#deleteBtn'))
      .triggerEventHandler('click', null);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('This is a fresh comment');
  });

});
