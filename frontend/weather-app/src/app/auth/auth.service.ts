import jwt_decode from 'jwt-decode';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  //Dodaj logaut, chuvaj user posle login, izvadi info od tokenot, imash simnato biblioteka

  register(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    confirmedPassword: string
  ) {
    return this.http.post(
      'http://localhost:27191/api/users/register',
      {
        username,
        firstName,
        lastName,
        password,
        confirmedPassword,
      },
      { responseType: 'text' }
    );
  }

  //   private handleAuthentication(
  //     email: string,
  //     userId: string,
  //     token: string,
  //     expiresIn: number
  //   ) {
  //     const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //     const user = new User(email, userId, token, expirationDate);
  //     this.user.next(user);
  //     this.autoLogout(expiresIn * 1000);
  //     localStorage.setItem('userData', JSON.stringify(user));
  //   }

  login(username: string, password: string) {
    return this.http.post(
      'http://localhost:27191/api/users/login',
      {
        username,
        password,
      },
      { responseType: 'text' }
    );
  }

  //   autoLogin() {
  //     const userData: {
  //       email: string;
  //       id: string;
  //       _token: string;
  //       _tokenExpirationDate: string;
  //     } = JSON.parse(localStorage.getItem('userData'));
  //     if (!userData) {
  //       return;
  //     }
  //     const loadedUser = new User(
  //       userData.email,
  //       userData.id,
  //       userData._token,
  //       new Date(userData._tokenExpirationDate)
  //     );

  //     if (loadedUser.token) {
  //       this.user.next(loadedUser);
  //       const expirationDuration =
  //         new Date(userData._tokenExpirationDate).getTime() -
  //         new Date().getTime();
  //       this.autoLogout(expirationDuration);
  //     }
  //   }

  //   logout() {
  //     this.user.next(null);
  //     this.router.navigate(['/auth']);
  //     localStorage.removeItem('userData');
  //     if (this.tokenExpirationTimer) {
  //       clearTimeout(this.tokenExpirationTimer);
  //     }
  //     this.tokenExpirationTimer = null;
  //   }

  //   autoLogout(expirationDuration: number) {
  //     console.log(expirationDuration);

  //     this.tokenExpirationTimer = setTimeout(() => {
  //       this.logout();
  //     }, expirationDuration);
  //   }

  //   private handleError(errorResponse: HttpErrorResponse) {
  //     let errorMessage = 'An unknown error occurred!';
  //     if (!errorResponse.error || !errorResponse.error.error) {
  //       return throwError(errorMessage);
  //     }
  //     switch (errorResponse.error.error.message) {
  //       case 'EMAIL_EXISTS':
  //         errorMessage = 'This email already exists';
  //         break;
  //       case 'EMAIL_NOT_FOUND':
  //       case 'INVALID_PASSWORD':
  //         errorMessage = 'Incorrect auth info';
  //         break;
  //     }
  //     return throwError(errorMessage);
  //   }
}
