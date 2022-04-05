import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ProgramaService} from "@shared/services/programa.service";
import {Programa} from "@shared/models/programa.model";


@Injectable()
export class LoadingProgramasEffects {

  programas$ = createEffect(
    () => this.actions$.pipe(
      ofType("[Programas] loading","[Programas] Programa created"),
      mergeMap(
        () => this.programasService.getAll()
          .pipe(
            map((programas: Programa[]) => ({type: '[Programas] Programas loaded', programas})),
            catchError(() => EMPTY)
          )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private programasService: ProgramaService
  ) {
  }

}
