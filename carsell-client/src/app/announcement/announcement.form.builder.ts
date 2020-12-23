import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AnnouncementControlBuilder } from './announcement.controls.impl';
import { MainCategoryType, Control } from './enums';
import { AnnouncementCreate, AnnouncementControl } from './models';

export class AnnouncementFormBuilder {
  private formGroup: FormGroup;
  private announcement: AnnouncementCreate;

  constructor(private fb: FormBuilder, private category: MainCategoryType) {}

  public withAnnouncement(announcement: AnnouncementCreate) {
    this.announcement = announcement;
    return this;
  }

  public build(): FormGroup {
    this.formGroup = this.fb.group({});
    const controlBuilder = new AnnouncementControlBuilder().withAnnnouncement(this.announcement);
    switch (this.category) {
      case MainCategoryType.CARS_AND_JEEPS: {
        this.addControl(controlBuilder.build(Control.ID));
        this.addControl(controlBuilder.build(Control.MAIN_CATEGORY_ID));
        this.addControl(controlBuilder.build(Control.MAKE));
        this.addControl(controlBuilder.build(Control.MODEL));
        this.addControl(controlBuilder.build(Control.ENGINE_TYPE));
        this.addControl(controlBuilder.build(Control.CONDITION_TYPE));
        this.addControl(controlBuilder.build(Control.HORSE_POWER));
        this.addControl(controlBuilder.build(Control.EMISSION_STANDART_TYPE));
        this.addControl(controlBuilder.build(Control.GEARBOX_TYPE));
        this.addControl(controlBuilder.build(Control.SUB_CATEGORY_ID));
        this.addControl(controlBuilder.build(Control.PRICE));
        this.addControl(controlBuilder.build(Control.CURRENCY));
        this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE));
        this.addControl(controlBuilder.build(Control.MILEAGE));
        this.addControl(controlBuilder.build(Control.COLOR));
        this.addControl(controlBuilder.build(Control.REGION));
        this.addControl(controlBuilder.build(Control.CITY));
        this.addControl(controlBuilder.build(Control.VALID_DAYS));
        this.addControl(controlBuilder.build(Control.VALID_FROM));
        break;
      }
      case MainCategoryType.MOTORBIKES: {
        this.addControl(controlBuilder.build(Control.ID));
        this.addControl(controlBuilder.build(Control.MAIN_CATEGORY_ID));
        this.addControl(controlBuilder.build(Control.MAKE));
        this.addControl(controlBuilder.build(Control.MODEL));
        this.addControl(controlBuilder.build(Control.ENGINE_TYPE));
        this.addControl(controlBuilder.build(Control.CONDITION_TYPE));
        this.addControl(controlBuilder.build(Control.HORSE_POWER));
        this.addControl(controlBuilder.build(Control.GEARBOX_TYPE));
        this.addControl(controlBuilder.build(Control.SUB_CATEGORY_ID));
        this.addControl(controlBuilder.build(Control.PRICE));
        this.addControl(controlBuilder.build(Control.CURRENCY));
        this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE));
        this.addControl(controlBuilder.build(Control.MILEAGE));
        this.addControl(controlBuilder.build(Control.COLOR));
        this.addControl(controlBuilder.build(Control.REGION));
        this.addControl(controlBuilder.build(Control.CITY));
        this.addControl(controlBuilder.build(Control.ENGINE_CATEGORY_TYPE));
        this.addControl(controlBuilder.build(Control.VALID_DAYS));
        this.addControl(controlBuilder.build(Control.VALID_FROM));
        break;
      }
      case MainCategoryType.BUSES: {
        this.addControl(controlBuilder.build(Control.ID));
        this.addControl(controlBuilder.build(Control.MAIN_CATEGORY_ID));
        this.addControl(controlBuilder.build(Control.MAKE));
        this.addControl(controlBuilder.build(Control.MODEL));
        this.addControl(controlBuilder.build(Control.ENGINE_TYPE));
        this.addControl(controlBuilder.build(Control.CONDITION_TYPE));
        this.addControl(controlBuilder.build(Control.EMISSION_STANDART_TYPE));
        this.addControl(controlBuilder.build(Control.GEARBOX_TYPE));
        this.addControl(controlBuilder.build(Control.SUB_CATEGORY_ID));
        this.addControl(controlBuilder.build(Control.NUMBER_OF_AXELS));
        this.addControl(controlBuilder.build(Control.WEIGHT_CAPACITY));
        this.addControl(controlBuilder.build(Control.PRICE));
        this.addControl(controlBuilder.build(Control.CURRENCY));
        this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE));
        this.addControl(controlBuilder.build(Control.MILEAGE));
        this.addControl(controlBuilder.build(Control.COLOR));
        this.addControl(controlBuilder.build(Control.REGION));
        this.addControl(controlBuilder.build(Control.CITY));
        this.addControl(controlBuilder.build(Control.VALID_DAYS));
        this.addControl(controlBuilder.build(Control.VALID_FROM));
        break;
      }
    }
    return this.formGroup;
  }

  private addControl(announcementControl: AnnouncementControl) {
    this.formGroup.addControl(announcementControl.name, announcementControl.control);
  }
}
