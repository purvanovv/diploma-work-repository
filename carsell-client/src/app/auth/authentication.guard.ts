import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private credentialsService: CredentialsService, private router: Router) { }
  canActivate(): boolean {
    if (!this.credentialsService.isAuthenticated()) {
      this.router.navigate(['/user/login'])
    }
    return true;
  }

}
