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
    private sanitizer: DomSanitizer, private dialog: MatDialog,
    private announcementStoreService: AnnouncementStoreService) {
    this.announcementModelConverter = new AnnouncementModelConverter(sanitizer);
  }

  ngOnInit(): void {
    this.announcementStoreService.initDataThirdStep$.subscribe(() => {
      console.log(this.announcementStoreService.getAnnouncementId());
      this.initData(this.announcementStoreService.getAnnouncementId());
    })
  }

  public previewImage() {
    this.dialog.open(PreviewImageModalComponent, {
      width: '70%',
      data: new PreviewImageModalDataModel(this.selectedImage, this.images, this.announcement)
    });
  }

  public selectImage(image: ImageFilePreview) {
    this.images.forEach(i => i.isSelected = false)
    this.selectedImage = image;
    this.selectedImage.isSelected = true;
  }

  public scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  public scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }

  private initData(announcementId: number) {
    const $initAnnouncement = this.announcementService.getAnnouncementPreview(announcementId);
    $initAnnouncement.subscribe((announcemet: AnnouncementPreview) => {
      this.announcement = announcemet;
      this.images = announcemet.imageFiles.map((i) => {
        return this.announcementModelConverter.convertImageFileToImageFilePreview(i);
      });
      this.initSelectedImage(this.images);
    });
  }

  private initSelectedImage(images: ImageFilePreview[]): void {
    this.selectedImage = images[0];
    images.forEach(i => {
      if (i.id < this.selectedImage.id) {
        this.selectedImage = i;
      }
    })
    this.selectedImage.isSelected = true;
  }

}
