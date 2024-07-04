import { TestBed, async, inject } from '@angular/core/testing';

import { loginGuard } from './login.guard';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [loginGuard]
    });
  });

  it('should ...', inject([loginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
