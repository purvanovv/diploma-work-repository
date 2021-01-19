import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { PreviewImageModalComponent } from '../create-edit-announcement/preview-image-modal/preview-image-modal.component';
import { AnnouncementPreview, ImageFilePreview, PreviewImageModalDataModel } from '../models';
import { AnnouncementModelConverter } from '../utils';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent implements OnInit {
  @ViewChild('imagesContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  @Input() announcement: AnnouncementPreview;
  images: ImageFilePreview[] = [];
  selectedImage: ImageFilePreview;
  options: Map<string, string>;
  announcementModelConverter: AnnouncementModelConverter;
  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog,
  ) {
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
    this.options = new Map<string, string>();
    if (source.dateOfManufacture != null) { this.options.set('Дата на производство', source.dateOfManufacture) }
    if (source.engineType != null) { this.options.set('Тип двигател', source.engineType) }
    if (source.horsePower != null && source.horsePower > 0) { this.options.set('Мощност', source.horsePower.toString() + ' к.с.') }
    if (source.emissionStandartType != null) { this.options.set('Евростандарт', source.emissionStandartType) }
    if (source.gearboxType != null) { this.options.set('Скоростна кутия', source.gearboxType) }
    if (source.subCategory && source.subCategory.name != null) { this.options.set('Категория', source.subCategory.name) }
    if (source.mileage != null) { this.options.set('Пробег', source.mileage.toString() + ' км') }
    if (source.color != null) { this.options.set('Цвят', source.color) }
    if (source.conditionType != null) { this.options.set('Състояние', source.conditionType) }
    if (source.coolingType != null) { this.options.set('Вид охлаждане', source.coolingType) }
    if (source.numberOfAxels != null && source.numberOfAxels > 0) { this.options.set('Брой оси', source.numberOfAxels.toString()) }
    if (source.numberOfSeats != null && source.numberOfSeats > 0) { this.options.set('Брой места', source.numberOfSeats.toString()) }
    if (source.weightCapacity != null && source.weightCapacity > 0) { this.options.set('Товароносимост', source.weightCapacity.toString()) }
    if (source.cubature != null && source.cubature > 0) { this.options.set('Кубатура', source.cubature.toString() + ' куб.см') }
    if (source.engineCategoryType != null) { this.options.set('Вид двигател', source.engineCategoryType) }
    if (source.totalWeight != null && source.totalWeight > 0) { this.options.set('Обща маса', source.totalWeight.toString() + ' кг.') }
    if (source.workingVolume != null && source.workingVolume > 0) { this.options.set('Работен обем', source.workingVolume.toString() + ' кг.') }
    if (source.numberOfBeds != null && source.numberOfBeds > 0) { this.options.set('Брой легла', source.numberOfBeds.toString()) }
    if (source.toiletType != null) { this.options.set('Тоалетна', source.toiletType) }
    if (source.airConditionType != null) { this.options.set('Климатик', source.airConditionType) }
    if (source.materialType != null) { this.options.set('Материал', source.materialType) }
    if (source.lengthSize != null && source.lengthSize > 0) { this.options.set('Дължина', source.lengthSize.toString() + ' м.') }
    if (source.width != null && source.width > 0) { this.options.set('Широчина', source.width.toString() + ' м.') }
    if (source.bicycleSize != null && source.bicycleSize > 0) { this.options.set('Размер', source.bicycleSize.toString()) }
    if (source.numberOfGears != null && source.numberOfGears > 0) { this.options.set('Скорости', source.numberOfGears.toString()) }
  }

  public previewImage() {
    this.dialog.open(PreviewImageModalComponent, {
      panelClass: 'preview-image-dialog',
      width: '70%',
      data: new PreviewImageModalDataModel(this.selectedImage, this.images, this.announcement)
    });
  }

  public selectImage(image: ImageFilePreview) {
    this.images.forEach(i => i.isSelected = false)
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
    images.forEach(i => {
      if (i.id < this.selectedImage.id) {
        this.selectedImage = i;
      }
    })
    this.selectedImage.isSelected = true;
  }


}
