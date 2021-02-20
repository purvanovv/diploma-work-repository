import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsService } from '@app/auth';

@Injectable({
  providedIn: 'root',
})
export class HttpAuthenticateInterceptor implements HttpInterceptor {
  constructor(private credentialsService: CredentialsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.credentialsService.credentials.token}`,
      },
    });
    return next.handle(request);
  }
}
