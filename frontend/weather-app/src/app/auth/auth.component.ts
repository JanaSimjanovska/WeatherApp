import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { log } from 'console';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  messageForUser = `Welcome to our awesome weather forecast app :) Please login to use it, or register if you don't already have an account.`;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const username = form.value.username;
    const password = form.value.password;
    const confirmedPassword = form.value.confirmedPassword;

    this.isLoading = true;
    if (this.isLoginMode) {
      this.closeSub = this.authService.login(username, password).subscribe({
        next: (data) => {
          data;
          this.isLoading = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.messageForUser = err.error;
          this.isLoading = false;
        },
      });
    } else {
      this.closeSub = this.authService
        .register(firstName, lastName, username, password, confirmedPassword)

        .subscribe({
          next: (data) => {
            this.messageForUser =
              'You have successfully registered. Go ahead and login with your username and password.';
            this.isLoginMode = !this.isLoginMode;
            this.isLoading = false;
          },
          error: (err) => {
            this.messageForUser = err.error;
            this.isLoading = false;
          },
        });
    }
    form.reset();
  }

  onHandleError() {
    this.messageForUser = '';
  }
  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
