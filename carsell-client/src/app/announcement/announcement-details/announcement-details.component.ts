import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { PreviewImageModalComponent } from '../create-edit-announcement/preview-image-modal/preview-image-modal.component';
import { AnnouncementPreview, ImageFilePreview, PreviewImageModalDataModel } from '../models';
import { AnnouncementModelConverter } from '../utils';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent implements OnInit {
  @ViewChild('imagesContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  @Input() announcement: AnnouncementPreview;
  images: ImageFilePreview[] = [];
  selectedImage: ImageFilePreview;
  announcementModelConverter: AnnouncementModelConverter;
  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog,
  ) {
    this.announcementModelConverter = new AnnouncementModelConverter(sanitizer);
  }


  ngOnInit(): void {
    this.images = this.announcement.imageFiles.map((i) => {
      return this.announcementModelConverter.convertImageFileToImageFilePreview(i);
    });
    this.initSelectedImage(this.images);
  }

  public previewImage() {
    this.dialog.open(PreviewImageModalComponent, {
      panelClass: 'preview-image-dialog',
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

  private initSelectedImage(images: ImageFilePreview[]): void {
    this.selectedImage = images[0];
    images.forEach(i => {
      if (i.id < this.selectedImage.id) {
        this.selectedImage = i;
      }
    })
    console.log(this.selectImage);
    this.selectedImage.isSelected = true;
  }


}
