import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AnnouncementStoreService } from '../announcement-store.service';
import { AnnouncementPreview } from '../models';

@Component({
  selector: 'app-list-search-result',
  templateUrl: './list-search-result.component.html',
  styleUrls: ['./list-search-result.component.scss']
})
export class ListSearchResultComponent implements OnInit {
  announcements: AnnouncementPreview[];
  constructor(private announcementStore: AnnouncementStoreService) { }

  ngOnInit(): void {
    this.announcementStore.getAnnouncements$().pipe(tap((announcements: AnnouncementPreview[]) => {
      this.announcements = announcements;
    })).subscribe();
  }

}
