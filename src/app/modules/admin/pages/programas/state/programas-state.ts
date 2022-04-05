import {Programa} from "@shared/models/programa.model";

export interface ProgramasState {
  programas: Programa[],
  programa: Programa,
  loadingProgramas: boolean;
}
