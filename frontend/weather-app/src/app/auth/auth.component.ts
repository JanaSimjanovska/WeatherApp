import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { HttpResponse } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  messageForUser: string = '';

  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

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
      this.authService.login(username, password).subscribe({
        next: (data) => {
          console.log(data);
          this.isLoading = false;
          // this.router.navigate(['/']); Pomisli dali da te prenasochuva koa se logirash uspeshno
        },
        error: (err) => {
          console.log(err);
          this.messageForUser = err.error;
          this.isLoading = false;
        },
      });
    } else {
      this.authService
        .register(firstName, lastName, username, password, confirmedPassword)

        .subscribe({
          next: (data) => {
            console.log(data);
            this.messageForUser =
              'You have successfully registered. Go ahead and login with your username and password.';
            this.isLoginMode = !this.isLoginMode;
            this.isLoading = false;
          },
          error: (err) => {
            console.log(err);
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
