import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageFilePreview, PreviewImageModalData, PreviewImageModalDataModel } from '@app/announcement/models';

@Component({
  selector: 'app-preview-image-modal',
  templateUrl: './preview-image-modal.component.html',
  styleUrls: ['./preview-image-modal.component.scss']
})
export class PreviewImageModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PreviewImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PreviewImageModalData) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  public selectImage(image: ImageFilePreview) {
    this.data.images.forEach(i => i.isSelected = false)
    this.data.selectedImage = image;
    this.data.selectedImage.isSelected = true;
  }
}
