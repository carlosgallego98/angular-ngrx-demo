import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this.authService.isAuthenticated()
      .pipe(
        map(res => {
          if (!res) {
            this.authService.redirectToLogin();
            return false;
          }
          return true;
        })
      );
  }
}
