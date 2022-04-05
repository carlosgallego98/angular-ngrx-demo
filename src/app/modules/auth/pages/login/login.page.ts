import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Login } from '@modules/auth/models/login';
import { userLogin, userLoginFailed, userLoginSuccess } from '@modules/auth/state/actions/login';
import { selectLoginErrorState, selectLoginLoadingState } from '@modules/auth/state/selectors/login.selectors';
import { Store } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { catchError, EMPTY, map, merge, mergeMap, Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  public isLoading$: Observable<boolean | undefined>;
  public error$: Observable<string | undefined>;

  constructor(
    private store: Store<AppState>,
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.isLoading$ = this.store.select(selectLoginLoadingState);
    this.error$ = this.store.select(selectLoginErrorState);
  }

  ngOnInit(): void {

  }

  onLogin() {
    if (!this.loginForm.valid) return;
    const credentials: Login = this.loginForm.value;

    this.store.dispatch(userLogin({ login: credentials }));

    this.authService.login(credentials)
      .pipe(
        catchError((err) => {
          this.store.dispatch(userLoginFailed({ error: err.error.msg }));
          return EMPTY;
        }),
      )
      .subscribe(
        (res) => {
          this.store.dispatch(userLoginSuccess({ authState: res }));
        },
      ).add(() => {
        this.router.navigate(['/']);
      });
  }

}
