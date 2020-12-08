import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AnnouncementService } from '../announcement.service';
import { AnnouncementListItemModel, AnnouncementPreview } from '../models';
import { AnnouncementModelConverter } from '../utils';

@Component({
  selector: 'app-list-announcements',
  templateUrl: './list-announcements.component.html',
  styleUrls: ['./list-announcements.component.scss']
})
export class ListAnnouncementsComponent implements OnInit {
  public announcements: AnnouncementListItemModel[];
  private announcementModelConverter: AnnouncementModelConverter;


  constructor(
    private announcementService: AnnouncementService,
    private sanitizer: DomSanitizer,
    private router: Router) {
    this.announcementModelConverter = new AnnouncementModelConverter(sanitizer);
  }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().pipe(map((announcements: AnnouncementPreview[]) => {
      this.announcements = announcements
        .map(a => this.announcementModelConverter.converAnnouncementPreviewToAnnouncementListItem(a))
    })).subscribe();
  }

  preview(id: number) {
    this.router.navigate([`announcement/preview/${id}`]);
  }

}
