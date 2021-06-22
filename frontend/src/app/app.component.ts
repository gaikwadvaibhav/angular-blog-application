import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private router: Router) { 
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log('this.user', this.user)
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
    location.reload()
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log('this.user', this.user)
    if(!this.user) {
      this.router.navigateByUrl('login');
    }
  }

}
