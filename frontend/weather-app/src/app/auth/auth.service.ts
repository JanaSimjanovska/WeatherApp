import jwt_decode from 'jwt-decode';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

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

  createUserUponSuccessfulLogin(loginReqToken: string) {
    const decodedToken = this.getDecodedToken(loginReqToken);

    if (!decodedToken) {
      return;
    }

    const username = decodedToken.unique_name;
    const userId = decodedToken.nameid;
    const expirationDate = new Date(decodedToken.exp * 1000);

    const loggedInUser = new User(
      username,
      userId,
      loginReqToken,
      expirationDate
    );
    this.user.next(loggedInUser);
    console.log(this.user);

    localStorage.setItem('userData', JSON.stringify(loggedInUser));
  }

  getDecodedToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (error) {
      return null;
    }
  }

  login(username: string, password: string) {
    return this.http
      .post(
        'http://localhost:27191/api/users/login',
        {
          username,
          password,
        },
        { responseType: 'text' }
      )
      .pipe(
        map((response) => {
          this.createUserUponSuccessfulLogin(response);
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  autoLogin() {
    const userDataJSON = localStorage.getItem('userData');
    let userData: {
      username: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    };
    if (userDataJSON) {
      userData = JSON.parse(userDataJSON);
      if (!userData) {
        return;
      }
      const loadedUser = new User(
        userData.username,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );

      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration =
          new Date(userData._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(expirationDuration);
      }
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);

    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

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
