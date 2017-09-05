import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth.service';
import { NotificationsService } from 'angular2-notifications';
import { AlertsService } from '@jaspero/ng2-alerts';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private notificationService: NotificationsService, private alertService: AlertsService) { }

  ngOnInit() {
    this.authService.error.subscribe((error: any) => {
      this.notificationService.error("Login Failed!", error.message);
    });
    this.authService.alert.subscribe((alert: any) => {
      this.alertService.create('info', alert);
    });
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
  }
}
