import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from '@shared/models/area.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends BaseService<Area> {

  constructor(
    http: HttpClient
  ) {
    super(http, 'areas', 'admin');
  }

}
