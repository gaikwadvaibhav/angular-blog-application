import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  submit() {
    console.log('loginForm', this.loginForm.value)
    this.router.navigateByUrl('home')
    localStorage.setItem('user', JSON.stringify(this.loginForm.value.username) )
  }

  forgetPwd(){
    this.router.navigateByUrl('forgot-password');
  }
}
