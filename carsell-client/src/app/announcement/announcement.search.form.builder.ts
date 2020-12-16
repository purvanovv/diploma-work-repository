import { FormGroup, FormBuilder } from '@angular/forms';
import { AnnouncementSearchControlBuilder } from './announcement.search.controls.impl';
import { Control, MainCategoryType } from './enums';
import { AnnouncementControl, AnnouncementSearch } from './models';

export class AnnouncementSearchFormBuilder {
    private formGroup: FormGroup;
    private data: AnnouncementSearch;

    constructor(private fb: FormBuilder, private category: MainCategoryType) { }

    public withSearchData(data: AnnouncementSearch) {
        this.data = data;
        return this;
    }

    public build(): FormGroup {
        this.formGroup = this.fb.group({});
        const controlBuilder = new AnnouncementSearchControlBuilder().withSearchData(this.data);
        switch (this.category) {
            case MainCategoryType.CARS_AND_JEEPS: {
                this.addControl(controlBuilder.build(Control.MAIN_CATEGORY_ID));
                this.addControl(controlBuilder.build(Control.MAKE));
                this.addControl(controlBuilder.build(Control.MODEL));
                this.addControl(controlBuilder.build(Control.ENGINE_TYPE));
                this.addControl(controlBuilder.build(Control.CONDITION_TYPE));
                this.addControl(controlBuilder.build(Control.HORSE_POWER_MIN));
                this.addControl(controlBuilder.build(Control.HORSE_POWER_MAX));
                this.addControl(controlBuilder.build(Control.EMISSION_STANDART_TYPE));
                this.addControl(controlBuilder.build(Control.GEARBOX_TYPE));
                this.addControl(controlBuilder.build(Control.SUB_CATEGORY_ID));
                this.addControl(controlBuilder.build(Control.PRICE_MIN));
                this.addControl(controlBuilder.build(Control.PRICE_MAX));
                this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE_FROM));
                this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE_TO));
                this.addControl(controlBuilder.build(Control.MILEAGE_MAX));
                this.addControl(controlBuilder.build(Control.COLOR));
                this.addControl(controlBuilder.build(Control.REGION));
                this.addControl(controlBuilder.build(Control.CITY));
                break;
            }
            case MainCategoryType.MOTORBIKES: {
                this.addControl(controlBuilder.build(Control.MAIN_CATEGORY_ID));
                this.addControl(controlBuilder.build(Control.MAKE));
                this.addControl(controlBuilder.build(Control.MODEL));
                this.addControl(controlBuilder.build(Control.ENGINE_TYPE));
                this.addControl(controlBuilder.build(Control.CONDITION_TYPE));
                this.addControl(controlBuilder.build(Control.HORSE_POWER_MIN));
                this.addControl(controlBuilder.build(Control.HORSE_POWER_MAX));
                this.addControl(controlBuilder.build(Control.GEARBOX_TYPE));
                this.addControl(controlBuilder.build(Control.SUB_CATEGORY_ID));
                this.addControl(controlBuilder.build(Control.PRICE_MIN));
                this.addControl(controlBuilder.build(Control.PRICE_MAX));
                this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE_FROM));
                this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE_TO));
                this.addControl(controlBuilder.build(Control.MILEAGE_MAX));
                this.addControl(controlBuilder.build(Control.COLOR));
                this.addControl(controlBuilder.build(Control.REGION));
                this.addControl(controlBuilder.build(Control.CITY));
                this.addControl(controlBuilder.build(Control.ENGINE_CATEGORY_TYPE));
                break;
            }
            case MainCategoryType.BUSES: {
                this.addControl(controlBuilder.build(Control.MAIN_CATEGORY_ID));
                this.addControl(controlBuilder.build(Control.MAKE));
                this.addControl(controlBuilder.build(Control.MODEL));
                this.addControl(controlBuilder.build(Control.ENGINE_TYPE));
                this.addControl(controlBuilder.build(Control.CONDITION_TYPE));
                this.addControl(controlBuilder.build(Control.EMISSION_STANDART_TYPE));
                this.addControl(controlBuilder.build(Control.GEARBOX_TYPE));
                this.addControl(controlBuilder.build(Control.SUB_CATEGORY_ID));
                this.addControl(controlBuilder.build(Control.NUMBER_OF_AXELS));
                this.addControl(controlBuilder.build(Control.WEIGHT_CAPACITY_MIN));
                this.addControl(controlBuilder.build(Control.WEIGHT_CAPACITY_MAX));
                this.addControl(controlBuilder.build(Control.PRICE_MIN));
                this.addControl(controlBuilder.build(Control.PRICE_MAX));
                this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE_FROM));
                this.addControl(controlBuilder.build(Control.DATE_OF_MANUACTURE_TO));
                this.addControl(controlBuilder.build(Control.MILEAGE_MAX));
                this.addControl(controlBuilder.build(Control.COLOR));
                this.addControl(controlBuilder.build(Control.REGION));
                this.addControl(controlBuilder.build(Control.CITY));
                break;
            }


        }
        return this.formGroup;

    }
    private addControl(announcementControl: AnnouncementControl) {
        this.formGroup.addControl(announcementControl.name, announcementControl.control);
    }
}