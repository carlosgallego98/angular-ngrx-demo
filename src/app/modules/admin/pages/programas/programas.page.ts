import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Programa} from '@shared/models/programa.model';
import {map, Observable} from 'rxjs';
import {DialogService} from "~/primeng/dynamicdialog";
import {
  ProgramaDialogComponent
} from "@modules/admin/pages/programas/components/programa-dialog/programa-dialog.component";
import {ProgramasState} from "@modules/admin/pages/programas/state/programas-state";
import {selectProgramas, selectProgramasLoading} from "@modules/admin/pages/programas/state/programas.selectors";
import {programasLoading} from "@modules/admin/pages/programas/state/programas.actions";

@Component({
  templateUrl: './programas.page.html',
  styleUrls: ['./programas.page.scss'],
  providers: [DialogService]
})
export class ProgramasPage implements OnInit {

  isLoading$: Observable<boolean>;
  programas$!: Observable<Programa[]>;

  constructor(
    public dialogService: DialogService,
    private store: Store<ProgramasState>
  ) {
    this.isLoading$ = this.store.select(selectProgramasLoading);
    this.programas$ = this.store.select(selectProgramas);
  }

  ngOnInit(): void {
    this.store.dispatch(programasLoading())
  }

  nuevoProgramaDialog() {
    const ref = this.dialogService.open(ProgramaDialogComponent, {
      header: 'Nuevo programa',
      width: '30%',
      height: '70vh'
    });
  }
}
