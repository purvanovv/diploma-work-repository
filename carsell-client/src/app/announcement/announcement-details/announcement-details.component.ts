import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { PreviewImageModalComponent } from '../create-edit-announcement/preview-image-modal/preview-image-modal.component';
import { AnnouncementPreview, ImageFilePreview, PreviewImageModalDataModel } from '../models';
import { AnnouncementModelConverter } from '../utils';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss'],
})
export class AnnouncementDetailsComponent implements OnInit {
  @ViewChild('imagesContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  @Input() announcement: AnnouncementPreview;
  images: ImageFilePreview[] = [];
  selectedImage: ImageFilePreview;
  vehicleOptions: Map<string, string>;
  userOptions: Map<string, string>;
  announcementModelConverter: AnnouncementModelConverter;
  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) {
    this.announcementModelConverter = new AnnouncementModelConverter(sanitizer);
  }

  ngOnInit(): void {
    this.images = this.announcement.imageFiles.map((i) => {
      return this.announcementModelConverter.convertImageFileToImageFilePreview(i);
    });
    this.initSelectedImage(this.images);
    this.buildOptions(this.announcement);
  }

  public buildOptions(source: AnnouncementPreview) {
    this.vehicleOptions = new Map<string, string>();
    if (source.dateOfManufacture != null) {
      this.vehicleOptions.set('Дата на производство', source.dateOfManufacture);
    }
    if (source.engineType != null) {
      this.vehicleOptions.set('Тип двигател', source.engineType);
    }
    if (source.horsePower != null && source.horsePower > 0) {
      this.vehicleOptions.set('Мощност', source.horsePower.toString() + ' к.с.');
    }
    if (source.emissionStandartType != null) {
      this.vehicleOptions.set('Евростандарт', source.emissionStandartType);
    }
    if (source.gearboxType != null) {
      this.vehicleOptions.set('Скоростна кутия', source.gearboxType);
    }
    if (source.subCategory && source.subCategory.name != null) {
      this.vehicleOptions.set('Категория', source.subCategory.name);
    }
    if (source.mileage != null) {
      this.vehicleOptions.set('Пробег', source.mileage.toString() + ' км');
    }
    if (source.color != null) {
      this.vehicleOptions.set('Цвят', source.color);
    }
    if (source.conditionType != null) {
      this.vehicleOptions.set('Състояние', source.conditionType);
    }
    if (source.coolingType != null) {
      this.vehicleOptions.set('Вид охлаждане', source.coolingType);
    }
    if (source.numberOfAxels != null && source.numberOfAxels > 0) {
      this.vehicleOptions.set('Брой оси', source.numberOfAxels.toString());
    }
    if (source.numberOfSeats != null && source.numberOfSeats > 0) {
      this.vehicleOptions.set('Брой места', source.numberOfSeats.toString());
    }
    if (source.weightCapacity != null && source.weightCapacity > 0) {
      this.vehicleOptions.set('Товароносимост', source.weightCapacity.toString());
    }
    if (source.cubature != null && source.cubature > 0) {
      this.vehicleOptions.set('Кубатура', source.cubature.toString() + ' куб.см');
    }
    if (source.engineCategoryType != null) {
      this.vehicleOptions.set('Вид двигател', source.engineCategoryType);
    }
    if (source.totalWeight != null && source.totalWeight > 0) {
      this.vehicleOptions.set('Обща маса', source.totalWeight.toString() + ' кг.');
    }
    if (source.workingVolume != null && source.workingVolume > 0) {
      this.vehicleOptions.set('Работен обем', source.workingVolume.toString() + ' кг.');
    }
    if (source.numberOfBeds != null && source.numberOfBeds > 0) {
      this.vehicleOptions.set('Брой легла', source.numberOfBeds.toString());
    }
    if (source.toiletType != null) {
      this.vehicleOptions.set('Тоалетна', source.toiletType);
    }
    if (source.airConditionType != null) {
      this.vehicleOptions.set('Климатик', source.airConditionType);
    }
    if (source.materialType != null) {
      this.vehicleOptions.set('Материал', source.materialType);
    }
    if (source.lengthSize != null && source.lengthSize > 0) {
      this.vehicleOptions.set('Дължина', source.lengthSize.toString() + ' м.');
    }
    if (source.width != null && source.width > 0) {
      this.vehicleOptions.set('Широчина', source.width.toString() + ' м.');
    }
    if (source.bicycleSize != null && source.bicycleSize > 0) {
      this.vehicleOptions.set('Размер', source.bicycleSize.toString());
    }
    if (source.numberOfGears != null && source.numberOfGears > 0) {
      this.vehicleOptions.set('Скорости', source.numberOfGears.toString());
    }
    this.userOptions = new Map<string, string>();
    const userInfo = source.userInfo;
    if (userInfo.username != null) {
      this.userOptions.set('Потребителско име', userInfo.username);
    }
    if (userInfo.firstName != null && userInfo.lastName != null) {
      this.userOptions.set('Име', `${userInfo.firstName} ${userInfo.lastName}`);
    }
    if (userInfo.telephone != null) {
      this.userOptions.set('Телефон', userInfo.telephone);
    }
    if (userInfo.email != null) {
      this.userOptions.set('Имейл', userInfo.email);
    }
  }

  public previewImage() {
    this.dialog.open(PreviewImageModalComponent, {
      panelClass: 'preview-image-dialog',
      width: '70%',
      data: new PreviewImageModalDataModel(this.selectedImage, this.images, this.announcement),
    });
  }

  public selectImage(image: ImageFilePreview) {
    this.images.forEach((i) => (i.isSelected = false));
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
    images.forEach((i) => {
      if (i.id < this.selectedImage.id) {
        this.selectedImage = i;
      }
    });
    this.selectedImage.isSelected = true;
  }
}
