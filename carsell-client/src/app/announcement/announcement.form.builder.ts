import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnouncementControlsImpl } from './announcement.controls.impl';
import { MainCategoryType, Control } from './enums';
import { AnnouncementControl } from './models';

export class AnnouncementFormBuilder {
    private formGroup: FormGroup;

    constructor(private fb: FormBuilder, private category: MainCategoryType) {

    }

    public construct(): FormGroup {
        this.formGroup = this.fb.group({});
        switch (this.category) {
            case MainCategoryType.CARS_AND_JEEPS: {
                this.addControl(AnnouncementControlsImpl.getControl(Control.MAIN_CATEGORY_ID));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MAKE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MODEL));
                this.addControl(AnnouncementControlsImpl.getControl(Control.ENGINE_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CONDITION_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.HORSE_POWER));
                this.addControl(AnnouncementControlsImpl.getControl(Control.EMISSION_STANDART_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.GEARBOX_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.SUB_CATEGORY_ID));
                this.addControl(AnnouncementControlsImpl.getControl(Control.PRICE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CURRENCY));
                this.addControl(AnnouncementControlsImpl.getControl(Control.DATE_OF_MANUACTURE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MILEAGE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.COLOR));
                this.addControl(AnnouncementControlsImpl.getControl(Control.REGION));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CITY));
                break;
            }
            case MainCategoryType.MOTORBIKES: {
                this.addControl(AnnouncementControlsImpl.getControl(Control.MAIN_CATEGORY_ID));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MAKE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MODEL));
                this.addControl(AnnouncementControlsImpl.getControl(Control.ENGINE_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CONDITION_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.HORSE_POWER));
                this.addControl(AnnouncementControlsImpl.getControl(Control.GEARBOX_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.SUB_CATEGORY_ID));
                this.addControl(AnnouncementControlsImpl.getControl(Control.PRICE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CURRENCY));
                this.addControl(AnnouncementControlsImpl.getControl(Control.DATE_OF_MANUACTURE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MILEAGE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.COLOR));
                this.addControl(AnnouncementControlsImpl.getControl(Control.REGION));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CITY));
                this.addControl(AnnouncementControlsImpl.getControl(Control.ENGINE_CATEGORY_TYPE));
                break;
            }
            case MainCategoryType.BUSES: {
                this.addControl(AnnouncementControlsImpl.getControl(Control.MAIN_CATEGORY_ID));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MAKE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MODEL));
                this.addControl(AnnouncementControlsImpl.getControl(Control.ENGINE_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CONDITION_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.EMISSION_STANDART_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.GEARBOX_TYPE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.SUB_CATEGORY_ID));
                this.addControl(AnnouncementControlsImpl.getControl(Control.NUMBER_OF_AXELS));
                this.addControl(AnnouncementControlsImpl.getControl(Control.WEIGHT_CAPACITY));
                this.addControl(AnnouncementControlsImpl.getControl(Control.PRICE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CURRENCY));
                this.addControl(AnnouncementControlsImpl.getControl(Control.DATE_OF_MANUACTURE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.MILEAGE));
                this.addControl(AnnouncementControlsImpl.getControl(Control.COLOR));
                this.addControl(AnnouncementControlsImpl.getControl(Control.REGION));
                this.addControl(AnnouncementControlsImpl.getControl(Control.CITY));
                break;
            }


        }
        return this.formGroup;
    }

    private addControl(announcementControl: AnnouncementControl) {
        this.formGroup.addControl(announcementControl.name, announcementControl.control);
    }

}