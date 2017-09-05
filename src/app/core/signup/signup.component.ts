import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth.service';
import { NotificationsService } from 'angular2-notifications';
import { AlertsService } from '@jaspero/ng2-alerts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private notificationService: NotificationsService, private alertService: AlertsService) { }

  ngOnInit() {
    this.authService.error.subscribe((error: any) => {
      this.notificationService.error("Sign Up Failed!", error.message);
    });
    this.authService.alert.subscribe((alert: any) => {
      this.alertService.create('success', alert);
    });
  }

  onSignup(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUp(email, password);
  }

}
