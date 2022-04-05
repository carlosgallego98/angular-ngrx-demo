import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from '@modules/auth/models/autenticated';
import { Login } from '@modules/auth/models/login';
import { userLogout, userLogoutFailed, userLogoutSuccess } from '@modules/auth/state/actions/login';
import { selectLoginState } from '@modules/auth/state/selectors/login.selectors';
import { Store } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map, catchError, of } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState$: Observable<AuthState>;
  private url = environment.apiUrl + 'auth'

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.authState$ = this.store.select(selectLoginState);
  }

  redirectToLogin(): void {
    this.router.navigate(['../', 'auth']);
  }

  login(data: Login): Observable<any> {
    // TODO: CAMBIAR el any
    return this.http.post<any>(this.url + '/login', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  logout(): Observable<any> {
    this.store.dispatch(userLogout());
    return this.http.get<any>(this.url + '/logout/')
      .pipe(
        map((res: any) => {
          this.store.dispatch(userLogoutSuccess());
          this.router.navigate(['/auth']);
          return res.data
        }),
        catchError((err) => {
          this.store.dispatch(userLogoutFailed({ error: err.msg }));
          return of(false)
        })
      );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.url + '/user')
      .pipe(
        map((res: any) => {
          return res
        })
      );
  }

  getLoginStatus(): Observable<AuthState> {
    return this.authState$;
  }

  isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(
      map((authState: AuthState) => {
        return authState.access_token ? true : false;
      })
    );
  }

}
