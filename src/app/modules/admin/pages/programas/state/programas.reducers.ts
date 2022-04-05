import {createReducer, on} from "@ngrx/store";
import {ProgramasState} from "@modules/admin/pages/programas/state/programas-state";
import {programasLoaded, programasLoading} from "@modules/admin/pages/programas/state/programas.actions";
import {Programa} from "@shared/models/programa.model";

export const programasInitialState: ProgramasState = {
  programas: [],
  programa: {} as Programa,
  loadingProgramas: false
};

export const programasState = createReducer(
  programasInitialState,
  on(programasLoading, (state) => {
    return {...state, loadingProgramas: true};
  }),
  on(programasLoaded, (state, { programas }) => {
    return {...state, loadingProgramas: false, programas: programas }
  })
)

