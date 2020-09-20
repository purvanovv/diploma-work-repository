import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainCategory, SubCategory, Make } from '../models';
import { AnnouncementService } from '../announcement.service';
import { Observable, Subject, pipe, concat } from 'rxjs';
import { tap, startWith, mergeMap } from 'rxjs/operators';
import { EngineType, AirConditionType, ConditionType, CoolingType, Currency, EmissionStandartType, EngineCategoryType, GearboxType, HeatingType, MaterialType, ToiletType } from '../enums';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})

export class CreateAnnouncementComponent implements OnInit {
  public isEditable = false; //false
  public isLinear = false; //false
  public completed = false;  //false
  public announcementId: number;

  @ViewChild('stepper') stepper: MatStepper;

  ngOnInit() {

  }

  private changeStep() {
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  public prepareSecondStep(announcementId: number) {
    this.announcementId = announcementId;
    this.changeStep();
  }

  public prepareThirdStep(announcementId: number){
    this.changeStep();
  }


}
