import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Programa } from '@shared/models/programa.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService extends BaseService<Programa>{

  constructor(
    http: HttpClient,
  ) {
    super(http, 'programas', 'admin');
  }

  // getSubprograms$(): Observable<any> {
  //   return this.items$.asObservable();
  // }
}
