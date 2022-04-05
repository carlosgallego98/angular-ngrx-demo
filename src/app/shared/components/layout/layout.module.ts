import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    MenubarModule,
    ButtonModule,
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
