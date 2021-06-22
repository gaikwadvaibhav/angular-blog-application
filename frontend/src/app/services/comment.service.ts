import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Comment } from '../model/comment';

const apiURL = 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  addCommentByPostId(comment: Comment, id: any): Observable<Comment> {
    return this.http.post<Comment>(`${apiURL}/posts/${id}/comments`, comment).pipe(
      tap((prod: Comment) => this.log(`added comment w/ id=${prod.id} to post w/ id=${id}`)),
      catchError(this.handleError<Comment>('addComment'))
    );
  }

  getCommentsByPostId(postId: any): Observable<Comment[]> {
    const url = `${apiURL}/posts/${postId}/comments`;
    return this.http.get<Comment[]>(url).pipe(
        tap(() => this.log(`fetched comments by postId=${postId}`)),
        catchError(this.handleError<Comment[]>('getCommentsByPostId', []))
      );
  }

  deleteCommentById(id: any): Observable<Comment> {
    const url = `${apiURL}/comments/${id}`;
    return this.http.delete<Comment>(url).pipe(
      tap(_ => this.log(`deleted comment id=${id}`)),
      catchError(this.handleError<Comment>('deleteComment'))
    );
  }

  updateComment(id: any, comment: Comment): Observable<Comment> {
    const url = `${apiURL}/comments/${id}`;
    return this.http.put<Comment>(url, comment).pipe(
      tap(_ => this.log(`updated comment id=${id}`)),
      catchError(this.handleError<Comment>('updateComment'))
    );
  }

  getCommentById(id: any): Observable<Comment> {
    const url = `${apiURL}/comments/${id}`;
    return this.http.get<Comment>(url).pipe(
      tap(() => this.log(`fetched comment by id=${id}`)),
      catchError(this.handleError<Comment>('getCommentById'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
