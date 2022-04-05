import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  items: MenuItem[];

  constructor(private authService: AuthService) {
    this.items = [
      {
        label: 'Inicio',
        routerLink: '/',
        icon: 'pi pi-home'
      },
      {
        label: 'Programas',
        icon: 'pi pi-list',
        routerLink: 'programas',
      },
    ]
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logout().subscribe();
  }

}
