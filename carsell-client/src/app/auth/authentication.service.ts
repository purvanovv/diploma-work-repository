import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Credentials, Signup } from './auth.models';

import { CredentialsService } from './credentials.service';

const routes = {
  login: () => 'api/auth/signin',
  register: () => 'api/auth/signup'
}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {



  constructor(private credentialsService: CredentialsService, private httpClient: HttpClient) { }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    return this.httpClient.post<Credentials>(routes.login(), context).pipe(tap((credentials: Credentials) => {
      this.credentialsService.setCredentials(credentials, context.remember);
    }))
  }

  register(data: Signup) {
    return this.httpClient.post<any>(routes.register(), data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
