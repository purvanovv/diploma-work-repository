import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '@app/material.module';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: CredentialsService, useClass: MockCredentialsService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
