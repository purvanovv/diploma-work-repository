import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AnnouncementStoreService } from '@app/announcement/announcement-store.service';
import { AnnouncementFormBuilder } from '@app/announcement/announcement.form.builder';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { MainCategoryType } from '@app/announcement/enums';
import { AnnouncementPreview, ImageFile, ImageFilePreview, ImageFilePreviewModel, PreviewImageModalDataModel } from '@app/announcement/models';
import { AnnouncementModelConverter } from '@app/announcement/utils';
import { PreviewImageModalComponent } from '../preview-image-modal/preview-image-modal.component';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss'],
})
export class ThirdStepComponent implements OnInit {
  @ViewChild('imagesContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  announcement: AnnouncementPreview;
  images: ImageFilePreview[] = [];
  selectedImage: ImageFilePreview;
  announcementModelConverter: AnnouncementModelConverter;
  constructor(private announcementService: AnnouncementService,
    private announcementStoreService: AnnouncementStoreService) {
  }

  ngOnInit(): void {
    this.announcementStoreService.initDataThirdStep$.subscribe(() => {
      this.initData(this.announcementStoreService.getAnnouncementId());
    })
  }

  private initData(announcementId: number) {
    this.announcementService
      .getAnnouncementPreview(announcementId)
      .subscribe((announcemet: AnnouncementPreview) => {
        this.announcement = announcemet;
      });

  }

}
