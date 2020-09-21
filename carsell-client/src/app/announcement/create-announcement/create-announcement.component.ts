import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss'],
})
export class CreateAnnouncementComponent implements OnInit {
  public isEditable = true; //false
  public isLinear = true; //false
  public completed = true; //false
  public announcementId: number;

  @ViewChild('stepper') stepper: MatStepper;

  ngOnInit() {}

  private changeStep() {
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  public prepareSecondStep(announcementId: number) {
    this.announcementId = announcementId;
    this.changeStep();
  }

  public prepareThirdStep(announcementId: number) {
    this.changeStep();
  }
}
