import { AuthState } from "@modules/auth/models/autenticated";
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/reducers";

export const selectAuthState = (state: AppState) => state.loginState;

export const selectLoginState = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectLoginLoadingState = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoading
);

export const selectLoginErrorState = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
