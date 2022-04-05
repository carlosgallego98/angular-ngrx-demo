import { AuthState } from "@modules/auth/models/autenticated";
import { createReducer, on } from "@ngrx/store";
import { userLogin, userLoginFailed, userLoginSuccess, userLogout, userLogoutFailed, userLogoutSuccess } from "../actions/login";

export const initialState: AuthState = {
  access_token: '',
  token_type: '',
  expires_at: null,
  isLoading: false,
  error: '',
};

export const loginReducer = createReducer(
  initialState,
  on(userLogin, (state) => {
    return { ...state, isLoading: true };
  }),
  on(userLoginSuccess, (state, { authState }) => {
    return { ...state, ...authState, isLoading: false };
  }),
  on(userLoginFailed, (state, { error }) => {
    return { ...initialState, isLoading: false, error }
  }),
  on(userLogout, (state,) => {
    return { ...state, isLoading: true };
  }),
  on(userLogoutSuccess, () => {
    return { ...initialState, isLoading: false };
  }),
  on(userLogoutFailed, (state, { error }) => {
    return { ...state, isLoading: false, error }
  }),
);
