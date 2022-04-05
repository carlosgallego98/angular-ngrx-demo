import {createSelector} from "@ngrx/store";
import {ProgramasState} from "@modules/admin/pages/programas/state/programas-state";
import {AppState} from "../../../../../reducers";


export const selectProgramasState = (state: any) => state.programasFeature;

export const selectProgramasLoading = createSelector(
  selectProgramasState,
  (state: ProgramasState) => state.loadingProgramas
)

export const selectProgramas = createSelector(
  selectProgramasState,
  (state: ProgramasState) => state.programas
)
