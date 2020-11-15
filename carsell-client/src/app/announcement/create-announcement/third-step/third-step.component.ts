import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AnnouncementFormBuilder } from '@app/announcement/announcement.form.builder';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { MainCategoryType } from '@app/announcement/enums';
import { AnnouncementPreview, ImageFile } from '@app/announcement/models';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss'],
})
export class ThirdStepComponent implements OnInit {
  @Input() announcementId: number;
  announcement: AnnouncementPreview;
  imageUrls: SafeUrl[] = [];
  constructor(private announcementService: AnnouncementService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    const $initAnnouncement = this.announcementService.getAnnouncementPreview(this.announcementId);
    $initAnnouncement.subscribe((announcemet: AnnouncementPreview) => {
      this.announcement = announcemet;
      console.log(announcemet);
    });

    const $initImages = this.announcementService.getImages(this.announcementId);
    $initImages.subscribe((images: ImageFile[]) => {
      this.imageUrls = images.map((i) => {
        const blob = this.base64ToBlob(i.encodedImage, i.dataType);
        return this.blobToUrl(blob);
      });
    });
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
