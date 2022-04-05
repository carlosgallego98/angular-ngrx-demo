import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectOnAuthenticatedGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this.authService.isAuthenticated()
      .pipe(
        map(res => {
          if (res) {
            this.router.navigate(['/']);
            return false;
          }
          return true;
        })
      );
  }
}
