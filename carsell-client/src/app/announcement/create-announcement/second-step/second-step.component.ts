import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { map, catchError } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { FileUpload } from '@app/announcement/models';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
})

//create subject of files
export class SecondStepComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  public files: FileUpload[] = [];
  public disableSubmit = true;
  public disableUpload = false;
  public disableRemove = false;
  private maxNumberOfFiles = 3;

  constructor(private announcementService: AnnouncementService) {}

  @Input() announcementId: number;
  @Output() onUploadFiles: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  public upload() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      for (let index = 0; index < fileInput.files.length; index++) {
        const file = fileInput.files[index];
        this.files.push({ data: file, progress: 0, inProgress: false });

        this.disableSubmit = false;
        if (this.files.length >= this.maxNumberOfFiles) {
          this.disableUpload = true;
          break;
        }
      }
    };
    fileInput.click();
  }

  public remove(index: number) {
    this.files.splice(index, 1);
    const fileInput = this.fileInput.nativeElement;
    fileInput.value = '';
    this.disableUpload = false;
    if (this.files.length <= 0) {
      this.disableSubmit = true;
    }
  }

  public submitForm() {
    this.disableRemove = true;
    this.disableSubmit = true;
    this.disableUpload = true;
    this.uploadFiles();
  }

  private uploadFiles() {
    this.fileInput.nativeElement.value = '';
    this.files.forEach((file) => {
      file.inProgress = true;
      this.announcementService
        .upload(file.data, this.announcementId)
        .pipe(
          map((event) => {
            console.log(event);
            console.log(event.type);
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
              this.onUploadFiles.emit(this.announcementId);
            }
          }
        });
    });
  }

  private removeFileFromArray(file: FileUpload) {
    let fileIndex = this.files.indexOf(file);
    console.log(fileIndex);
    this.files.splice(fileIndex, 1);
    console.log(this.files);
  }
}
