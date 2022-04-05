import { TestBed } from '@angular/core/testing';

import { RedirectOnAuthenticatedGuard } from './redirect-on-authenticated.guard';

describe('RedirectOnAuthenticatedGuard', () => {
  let guard: RedirectOnAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectOnAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
