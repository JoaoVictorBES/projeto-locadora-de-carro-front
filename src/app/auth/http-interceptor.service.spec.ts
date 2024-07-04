import { HttpInterceptorFn } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { meuhttpInterceptor } from './http-interceptor.service';

describe('HttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [meuhttpInterceptor]
    });
  });

  it('should be created', inject([meuhttpInterceptor], (service: HttpInterceptorFn) => {
    expect(service).toBeTruthy();
  }));
});
