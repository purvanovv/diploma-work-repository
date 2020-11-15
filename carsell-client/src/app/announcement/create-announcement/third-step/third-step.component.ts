import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AnnouncementFormBuilder } from '@app/announcement/announcement.form.builder';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { MainCategoryType } from '@app/announcement/enums';
import { AnnouncementPreview, ImageFile, ImageFilePreview, ImageFilePreviewModel } from '@app/announcement/models';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss'],
})
export class ThirdStepComponent implements OnInit {
  @Input() announcementId: number;
  announcement: AnnouncementPreview;
  images: ImageFilePreview[] = [];
  selectedImage: ImageFilePreview;
  constructor(private announcementService: AnnouncementService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.initData();
  }


  public selectImage(image: ImageFilePreview) {
    this.images.forEach(i => i.isSelected = false)
    this.selectedImage = image;
    this.selectedImage.isSelected = true;
  }

  private initData() {
    const $initAnnouncement = this.announcementService.getAnnouncementPreview(this.announcementId);
    $initAnnouncement.subscribe((announcemet: AnnouncementPreview) => {
      this.announcement = announcemet;
      console.log(announcemet);
    });

    const $initImages = this.announcementService.getImages(this.announcementId);
    $initImages.subscribe((images: ImageFile[]) => {
      this.images = images.map((i) => {
        const blob = this.base64ToBlob(i.encodedImage, i.dataType);
        return new ImageFilePreviewModel(i.id, this.blobToUrl(blob), false);
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

  private blobToUrl(blob: Blob): SafeUrl {
    const unsafeImageUrl = URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
  }

  private base64ToBlob(encodedString: string, dataType: string): Blob {
    const byteCharacters = atob(encodedString);
    const uintArray = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      uintArray[i] = byteCharacters.charCodeAt(i);
    }
    return new Blob([uintArray], { type: dataType });
  }

}
