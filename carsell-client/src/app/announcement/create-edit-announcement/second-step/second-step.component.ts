import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { map, catchError, tap, mergeMap, take } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { concat, Observable, of } from 'rxjs';
import { AnnouncementCreate, FileUpload, ImageFile } from '@app/announcement/models';
import { AnnouncementStoreService } from '@app/announcement/announcement-store.service';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementModelConverter } from '@app/announcement/utils';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
})

export class SecondStepComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  public isCreateMode = false;
  public files: FileUpload[] = [];
  public disableSubmit = true;
  public disableUpload = false;
  private maxNumberOfFiles = 6;
  private announcementId: number;
  private modelConverter: AnnouncementModelConverter;

  constructor(private announcementService: AnnouncementService,
    private announcementStoreService: AnnouncementStoreService,
    private route: ActivatedRoute,
    private announcementStore: AnnouncementStoreService,
    sanitizer: DomSanitizer) {
    this.modelConverter = new AnnouncementModelConverter(sanitizer);
  }

  ngOnInit(): void {
    this.checkForEditMode();

    this.announcementStoreService.initDataSecondStep$.pipe(
      tap(() => {
        this.announcementId = this.announcementStoreService.getAnnouncementId();
        const observables = [];
        if (!this.isCreateMode) {
          observables.push(this.$initImages(this.announcementId));
        }
        const $getFilesToUpload = this.announcementStore.getFilesToUpload$()
          .pipe(tap((files: FileUpload[]) => {
            this.files = files;
            this.disableSubmit = this.files.length <= 0;
            this.disableUpload = this.files.length >= this.maxNumberOfFiles;
          }
          ));
        observables.push($getFilesToUpload);
        concat(...observables).subscribe();
      })).subscribe();
    // TODO Fix nested observables
  }



  public upload() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      const remaining = Math.min(fileInput.files.length, this.maxNumberOfFiles - this.files.length);
      for (let index = 0; index < remaining; index++) {
        const file = fileInput.files[index];
        this.announcementStore.addFileToUpload({ data: file, progress: 0, inProgress: false });
      }
    };
    fileInput.click();
  }

  public remove(index: number) {
    this.announcementStore.removeFileToUpload(index);
    const fileInput = this.fileInput.nativeElement;
    fileInput.value = '';
  }

  public submitForm() {
    this.announcementService.deleteImages(this.announcementId).pipe(
      take(1),
      tap(() => this.uploadFiles())
    ).subscribe();
  }

  private uploadFiles() {
    this.fileInput.nativeElement.value = '';
    this.files.forEach((file) => {
      file.inProgress = true;
      this.announcementService
        .upload(file.data, this.announcementId)
        .pipe(
          map((event) => {
            switch (event.type) {
              case HttpEventType.UploadProgress:
                file.progress = Math.round((event.loaded * 100) / event.total);
                break;
              case HttpEventType.Response:
                return event;
            }
          }),
          catchError((error: HttpErrorResponse) => {
            file.inProgress = false;
            return of(`${file.data.name} upload failed.`);
          })
        )
        .subscribe((event: any) => {
          console.log(event);
          if (typeof event === 'object') {
            this.removeFileFromArray(file);
            if (this.files.length <= 0) {
              this.announcementStoreService.initDataThirdStep();
              this.announcementStoreService.changeStep(2);
            }
          }
        });
    });
  }

  private removeFileFromArray(file: FileUpload) {
    const fileIndex = this.files.indexOf(file);
    this.announcementStore.removeFileToUpload(fileIndex);
  }

  private checkForEditMode() {
    this.isCreateMode = !this.route.snapshot.paramMap.get('id');
  }

  private $initImages(announcementId: number) {
    return this.announcementService.getImages(announcementId).pipe(
      take(1),
      tap((images: ImageFile[]) => {
        const files = images.map(i => {
          return this.modelConverter.convertImageFileToFileUpload(i);
        })
        this.announcementStore.setFilesToUpload(files);
      }));
  }
}
