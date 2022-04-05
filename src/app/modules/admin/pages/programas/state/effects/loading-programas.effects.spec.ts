import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadingProgramasEffects } from './loading-programas.effects';

describe('LoadingProgramasEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadingProgramasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingProgramasEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoadingProgramasEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
