import { AuthState } from "@modules/auth/models/autenticated";
import { Login } from "@modules/auth/models/login";
import { createAction, props } from "@ngrx/store";

export const userLogin = createAction(
  "[Auth] Login",
  props<{ login: Login }>()
);

export const userLogout = createAction(
  "[Auth] Logout",
);

export const userLoginSuccess = createAction(
  "[Auth] User login success",
  props<{ authState: AuthState }>()
);

export const userLoginFailed = createAction(
  "[Auth] User login failed",
  props<{ error: string }>()
);

export const userLogoutSuccess = createAction(
  "[Auth] User logout success",
);

export const userLogoutFailed = createAction(
  "[Auth] User logout failed",
  props<{ error: string }>()
);
