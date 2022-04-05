import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Area} from '@shared/models/area.model';
import {Programa} from '@shared/models/programa.model';
import {AreaService} from '@shared/services/area.service';
import {ProgramaService} from '@shared/services/programa.service';
import {catchError, EMPTY, Observable} from 'rxjs';
import {ProgramasState} from '../../state/programas-state';
import {programaCreated, programasLoading} from '../../state/programas.actions';

@Component({
  selector: 'app-programa-dialog',
  templateUrl: './programa-dialog.component.html',
  styleUrls: ['./programa-dialog.component.scss']
})
export class ProgramaDialogComponent implements OnInit {
  estados: any = [
    {
      id: 'activo',
      nombre: "activo"
    },
    {
      id: 'inactivo',
      nombre: "inactivo"
    }
  ];

  public programasForm: FormGroup;
  public $areas: Observable<Area[]> = this.areaService.getAll$();

  constructor(
    private areaService: AreaService,
    private programaService: ProgramaService,
    private formBuilder: FormBuilder,
    private store: Store<ProgramasState>
  ) {
    this.programasForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['activo'],
      area_id: [0]
    })
  }

  ngOnInit(): void {
    this.areaService.getAll().subscribe();
  }

  onSubmitForm(): void {
    if (!this.programasForm.valid) return;
    const programa: Programa = this.programasForm.value;
    this.programaService.create(programa)
      .pipe(
        catchError(err => {
          console.log(err);
          return EMPTY;
        }))
      .subscribe(
        (programa: Programa) => {
          console.log(programa);
          this.store.dispatch(programasLoading())
        }
      )
  }

}
