import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnnouncementPreview, ImageFilePreview, PreviewImageModalData, PreviewImageModalDataModel } from '@app/announcement/models';

@Component({
  selector: 'app-preview-image-modal',
  templateUrl: './preview-image-modal.component.html',
  styleUrls: ['./preview-image-modal.component.scss']
})
export class PreviewImageModalComponent implements OnInit {

  public description: string;

  constructor(public dialogRef: MatDialogRef<PreviewImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PreviewImageModalData) { }

  ngOnInit(): void {
    this.description = this.buildDescription(this.data.announcement);
  }

  public selectImage(image: ImageFilePreview) {
    this.data.images.forEach(i => i.isSelected = false)
    this.data.selectedImage = image;
    this.data.selectedImage.isSelected = true;
  }

  public closeModal() {
    this.dialogRef.close();
  }

  public prev() {
    for (let index = 0; index < this.data.images.length; index++) {
      const curr = this.data.images[index];
      if (curr.id === this.data.selectedImage.id) {
        this.data.images.forEach(i => i.isSelected = false);
        let prevIndex = index - 1;
        if (index <= 0) {
          prevIndex = this.data.images.length - 1;
        }
        const prev = this.data.images[prevIndex];
        prev.isSelected = true;
        this.data.selectedImage = prev;
        return;
      }
    }
  }

  public next() {
    for (let index = 0; index < this.data.images.length; index++) {
      const curr = this.data.images[index];
      if (curr.id === this.data.selectedImage.id) {
        this.data.images.forEach(i => i.isSelected = false);
        let nextIndex = index + 1;
        if (index >= this.data.images.length - 1) {
          nextIndex = 0;
        }
        const next = this.data.images[nextIndex];
        next.isSelected = true;
        this.data.selectedImage = next;
        return;
      }
    }
  }


  private buildDescription(announcement: AnnouncementPreview): string {
    return `
    ${announcement.dateOfManufacture != null ? announcement.dateOfManufacture + ',' : ''}
    ${announcement.engineCategoryType != null ? announcement.engineCategoryType + ',' : ''}
    ${announcement.horsePower != null ? announcement.horsePower + 'к.с,' : ''} 
    ${announcement.emissionStandartType != null ? announcement.emissionStandartType + ',' : ''}
    ${announcement.gearboxType != null ? announcement.gearboxType + ',' : ''}
    ${announcement.subCategory != null ? announcement.subCategory.name + ',' : ''}
    ${announcement.mileage != null ? announcement.mileage + 'км,' : ''} 
    ${announcement.region != null ? 'Регион:' + announcement.region : ''}
    `;
  }



}
