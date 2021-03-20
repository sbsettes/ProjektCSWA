import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registerForm = this.fb.group(
    {
      firstName: ["",[Validators.required,Validators.minLength(3)]],
      lastName: ["",[Validators.required,Validators.minLength(3)]],
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.minLength(8)]],
      passwordConfirm: ["",[Validators.required,Validators.minLength(8)]],
    }
  )
  ngOnInit(): void {
  }

  creatFromForm(): User{
    var user = new User();    
    user.firstName = this.registerForm.get("firstName").value
    user.lastName = this.registerForm.get("lastName").value
    user.email = this.registerForm.get("email").value
    user.password = this.registerForm.get("password").value
    return user
  }

  save(): void{
    
  }

}
