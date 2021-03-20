import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  loginForm = this.fb.group(
    {
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.minLength(8)]]
    }
  )

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(["search"])
  }

}
