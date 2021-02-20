import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AnnouncementService } from '../announcement.service';
import { AnnouncementListItemModel, AnnouncementPreview } from '../models';
import { AnnouncementModelConverter } from '../utils';

@Component({
  selector: 'app-list-announcements',
  templateUrl: './list-announcements.component.html',
  styleUrls: ['./list-announcements.component.scss'],
})
export class ListAnnouncementsComponent implements OnChanges {
  @Input()
  public countOfItemsToList: number | undefined = undefined;
  @Input()
  public announcements: AnnouncementPreview[];
  public announcementsToList: AnnouncementListItemModel[];

  private announcementModelConverter: AnnouncementModelConverter;
  constructor(sanitizer: DomSanitizer, private router: Router) {
    this.announcementModelConverter = new AnnouncementModelConverter(sanitizer);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.init();
  }

  preview(id: number) {
    this.router.navigate([`announcement/preview/${id}`]);
  }

  private init() {
    this.announcementsToList = [];
    if (this.announcements !== undefined && this.announcements.length > 0) {
      if (this.countOfItemsToList !== undefined && this.countOfItemsToList < this.announcements.length) {
        for (let i = 0; i < this.countOfItemsToList; i++) {
          this.announcementsToList.push(
            this.announcementModelConverter.converAnnouncementPreviewToAnnouncementListItem(this.announcements[i])
          );
        }
      } else {
        this.announcementsToList = this.announcements.map((a) =>
          this.announcementModelConverter.converAnnouncementPreviewToAnnouncementListItem(a)
        );
      }
    }
  }
}
