import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAnnouncementComponent } from './preview-announcement.component';

describe('PreviewAnnouncementComponent', () => {
  let component: PreviewAnnouncementComponent;
  let fixture: ComponentFixture<PreviewAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewAnnouncementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
