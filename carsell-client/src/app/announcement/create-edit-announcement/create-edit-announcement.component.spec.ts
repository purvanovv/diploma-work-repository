import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAnnouncementComponent } from './create-edit-announcement.component';

describe('CreateEditAnnouncementComponent', () => {
  let component: CreateEditAnnouncementComponent;
  let fixture: ComponentFixture<CreateEditAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditAnnouncementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
