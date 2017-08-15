import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUp(email,password);
    this.authService.error.subscribe((error:any) =>{
      this.error = error;
    })
  }

}
