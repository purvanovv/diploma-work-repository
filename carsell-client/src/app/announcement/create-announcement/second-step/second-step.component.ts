import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
interface MultipleFilesUpload {
  progress: number;
  inProgress: false
  data: File[];
}

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})

//create subject of files

export class SecondStepComponent implements OnInit {
  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;

  public files: MultipleFilesUpload;
  public disableSubmit = true;
  public disableUpload = false;
  public disableRemove = false;
  private maxNumberOfFiles = 3;


  constructor() { }

  ngOnInit(): void {
    this.files = { data: [], inProgress: false, progress: 0 }
  }

  public upload() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      for (let index = 0; index < fileInput.files.length; index++) {
        const file = fileInput.files[index];
        this.files.data.push(file);

        this.disableSubmit = false;
        if (this.files.data.length >= this.maxNumberOfFiles) {
          this.disableUpload = true;
          break;
        }
      }
      // this.upload();
    };
    fileInput.click();

  }

  public remove(index: number) {
    this.files.data.splice(index, 1);
    const fileInput = this.fileInput.nativeElement;
    fileInput.value = "";
    this.disableUpload = false;
    if (this.files.data.length <= 0) {
      this.disableSubmit = true;
    }
  }

  public submitForm() {
    this.disableRemove = true;
    this.disableSubmit = true;
    this.disableUpload = true;
  }

  // private upload() {
  //   this.fileInput.nativeElement.value = '';
  //   // this.files.forEach(file => {
  //   //   //this.callUploadService(file);
  //   // });
  // }

}
