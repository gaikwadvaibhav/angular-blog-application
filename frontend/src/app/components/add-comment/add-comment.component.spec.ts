import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddCommentComponent } from './add-comment.component';

describe('AddCommentComponent', () => {
  let component: AddCommentComponent;
  let fixture: ComponentFixture<AddCommentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render modal title in a h5 tag', waitForAsync(() => {
    const asyncFixture = TestBed.createComponent(AddCommentComponent);
    asyncFixture.detectChanges();
    const compiled = asyncFixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('New comment');
  }));

  it('form invalid when empty', () => {
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('should create a new comment', () => {
    component.commentForm.controls.user.setValue('Axel Rose');
    component.commentForm.controls.content.setValue('I love this test');
    expect(component.commentForm.valid).toBeTruthy();
    component.post = { id: '1', publish_date: null, description: 'This is a new post', author: '', content: '', title: '' };
    component.addComment();
    expect(component.comment).toEqual(jasmine.objectContaining({ user: 'Axel Rose', content: 'I love this test' }));
  });

});
