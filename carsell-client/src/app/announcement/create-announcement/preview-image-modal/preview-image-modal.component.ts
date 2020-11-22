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
