import { TestBed } from '@angular/core/testing';

import { AnnouncementStoreService } from './announcement-store.service';

describe('AnnouncementStoreService', () => {
  let service: AnnouncementStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
