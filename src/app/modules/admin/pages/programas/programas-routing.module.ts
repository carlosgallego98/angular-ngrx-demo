import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasPage } from './programas.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }
