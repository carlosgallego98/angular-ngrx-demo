import {createAction, props} from "@ngrx/store";
import {Programa} from "@shared/models/programa.model";

export const programasLoading = createAction(
  "[Programas] loading"
);

export const programasLoaded = createAction(
  "[Programas] Programas loaded",
  props<{ programas: Programa[] }>()
);

export const programaCreated = createAction(
  "[Programas] Programa created",
  props<{ programa: Programa }>()
)
