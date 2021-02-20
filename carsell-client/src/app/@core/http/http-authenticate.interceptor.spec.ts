import { TestBed } from '@angular/core/testing';

import { HttpAuthenticateInterceptor } from './http-authenticate.interceptor';

describe('HttpAuthenticateInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpAuthenticateInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HttpAuthenticateInterceptor = TestBed.inject(HttpAuthenticateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
