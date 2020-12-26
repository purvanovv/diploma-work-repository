import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAnnouncementsComponent } from './filter-announcements.component';

describe('FilterAnnouncementsComponent', () => {
  let component: FilterAnnouncementsComponent;
  let fixture: ComponentFixture<FilterAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
