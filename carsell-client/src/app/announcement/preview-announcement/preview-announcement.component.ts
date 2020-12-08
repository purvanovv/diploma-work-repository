import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../announcement.service';
import { AnnouncementPreview } from '../models';

@Component({
  selector: 'app-preview-announcement',
  templateUrl: './preview-announcement.component.html',
  styleUrls: ['./preview-announcement.component.scss']
})
export class PreviewAnnouncementComponent implements OnInit {

  public announcement: AnnouncementPreview;
  private announcementId: number;

  constructor(private route: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.announcementId = Number(this.route.snapshot.paramMap.get('id'));
    this.announcementService
      .getAnnouncementPreview(this.announcementId)
      .subscribe((announcement: AnnouncementPreview) => {
        console.log(announcement);
        this.announcement = announcement;
      })
  }

}
