import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isAuthenticated = false;
  private authToken!: string;

  constructor(private store: Store<AppState>) {
    store.select(state => state.loginState).subscribe(authState => {
      this.isAuthenticated = authState.access_token ? true : false;
      this.authToken = authState.access_token;
    })
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isAuthenticated) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.authToken
        }
      });
    }
    return next.handle(request);
  }
}
