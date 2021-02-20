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

export enum HttpStatus {
  METHOD_NOT_ALLOWED = 405,
  BAD_GATEWAY = 502,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST = 400,
  CONNECTION_REFUSED = 0,
}

export interface ApiError {
  status: HttpStatus;
  message: string;
  errors: string[];
}

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
    private notificationService: NotificationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      log.error('Request error', response);
    }
    const status: HttpStatus = response['status'];

    switch (status) {
      // handleValidationException
      case HttpStatus.BAD_REQUEST: {
        const apiError: ApiError = response['error'];
        this.notificationService.businessError(apiError.message);
        break;
      }

      // handleAuthenticateException
      case HttpStatus.UNAUTHORIZED: {
        const apiError: ApiError = response['error'];
        this.credentialsService.setCredentials();
        this.notificationService.businessError(apiError.message);
        this.router.navigate(['/user/login'], {
          queryParams: { redirect: this.router.routerState.snapshot.url },
          replaceUrl: true,
        });
        break;
      }

      // handleBusinessException
      case HttpStatus.METHOD_NOT_ALLOWED: {
        const apiError: ApiError = response['error'];
        console.log(apiError);
        this.notificationService.businessError(apiError.message);
        break;
      }

      // handleGlobalException
      case HttpStatus.INTERNAL_SERVER_ERROR: {
        const apiError: ApiError = response['error'];
        this.notificationService.technicalError(apiError.message, status.toString(), 'Грешка');
        break;
      }

      // handleTechnicalException
      case HttpStatus.BAD_GATEWAY: {
        const apiError: ApiError = response['error'];
        this.notificationService.technicalError(apiError.message, status.toString(), 'Грешка');
        break;
      }

      // handleConnectionRefused
      case HttpStatus.CONNECTION_REFUSED: {
        this.notificationService.technicalError(
          'Няма връзка със сървъра. Моля опитайте по-късно.',
          status.toString(),
          'Грешка'
        );
        break;
      }
    }
    throw response;
  }
}
