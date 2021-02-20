import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';

import { untilDestroyed } from '@core';
import { CredentialsService } from '@app/auth/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor(private media: MediaObserver, private credentialsService: CredentialsService, private router: Router) {}

  ngOnInit() {
    // Automatically close side menu on screens > sm breakpoint
    this.media
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) =>
          changes.some((change) => change.mqAlias !== 'xs' && change.mqAlias !== 'sm')
        ),
        untilDestroyed(this)
      )
      .subscribe(() => this.sidenav.close());
  }

  ngOnDestroy() {
    // Needed for automatic unsubscribe with untilDestroyed
  }

  isAuthenticated() {
    return this.credentialsService.isAuthenticated();
  }
}
