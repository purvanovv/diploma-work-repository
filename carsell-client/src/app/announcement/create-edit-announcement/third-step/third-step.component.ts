import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '@app/@shared/confirmation-dialog/confirmation-dialog.component';
import { AnnouncementStoreService } from '@app/announcement/announcement-store.service';
import { AnnouncementFormBuilder } from '@app/announcement/announcement.form.builder';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { MainCategoryType } from '@app/announcement/enums';
import { AnnouncementPreview, ConfirmDialogDataModel, ImageFile, ImageFilePreview, ImageFilePreviewModel, PreviewImageModalDataModel } from '@app/announcement/models';
import { AnnouncementModelConverter } from '@app/announcement/utils';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
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
    private announcementStoreService: AnnouncementStoreService,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.announcementStoreService.initDataThirdStep$.subscribe(() => {
      this.initData(this.announcementStoreService.getAnnouncementId());
    })
  }

  remove(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: new ConfirmDialogDataModel('Потвърждение за изтриване', 'Сигурни ли сте, че искате да изтриете обявата?')
    })

    dialogRef.afterClosed().pipe(mergeMap(dialogResult => {
      if (dialogResult) {
        return this.announcementService.removeAnnouncementById(id).pipe(mergeMap(() => {
          return of(true);
        }));
      } else {
        return of(false);
      }
    })).subscribe(result => {
      if (result) {
        this.router.navigate(['home']);
      }
    })


  }

  edit(id: number) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`announcement/edit/${id}`]);
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
