import { AuthState } from '@modules/auth/models/autenticated';
import { loginReducer } from '@modules/auth/state/reducers/login.reducers';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../environments/environment';

export interface AppState {
  loginState: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  loginState: loginReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['loginState'], rehydrate: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

