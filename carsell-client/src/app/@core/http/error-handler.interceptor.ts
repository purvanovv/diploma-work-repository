import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger } from '../logger.service';
import { CredentialsService } from '@app/auth';
import { Router } from '@angular/router';
import { NotificationService } from '@app/@shared';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private credentialsService: CredentialsService,
    private router: Router,
    private notificationService: NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      log.error('Request error', response);
    }
    const status = response['status'];
    switch (status) {
      case 401: {
        this.credentialsService.setCredentials();
        this.notificationService.error('Грешно потребителско име или парола');
        this.router.navigate(['/user/login'], {
          queryParams: { redirect: this.router.routerState.snapshot.url },
          replaceUrl: true
        });
        break;
      }
    }
    throw response;
  }
}
