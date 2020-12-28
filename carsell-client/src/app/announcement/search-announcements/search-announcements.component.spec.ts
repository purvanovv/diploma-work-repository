import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnnouncementsComponent } from './search-announcements.component';

describe('SearchAnnouncementsComponent', () => {
  let component: SearchAnnouncementsComponent;
  let fixture: ComponentFixture<SearchAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
