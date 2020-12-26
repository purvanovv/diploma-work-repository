import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementStoreService } from '../announcement-store.service';
import { modeStepLabels } from '../constants';
import { Mode } from '../enums';

@Component({
  selector: 'app-create-edit-announcement',
  templateUrl: './create-edit-announcement.component.html',
  styleUrls: ['./create-edit-announcement.component.scss'],
})
export class CreateEditAnnouncementComponent implements OnInit {
  public isEditable = true;
  public isLinear = true;
  public completed = true;
  public announcementId: number;
  public stepLabel: string[];

  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    private announcementStoreService: AnnouncementStoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initStepLabel();

    this.announcementStoreService.changeStep$.subscribe((step: number) => {
      if (step !== undefined) {
        this.stepper.selected.completed = true;
        this.stepper.next();
      }
    })
  }

  private initStepLabel() {
    if (!this.route.snapshot.paramMap.get('id')) {
      this.stepLabel = modeStepLabels.get(Mode.CREATE);
    }
    else {
      this.stepLabel = modeStepLabels.get(Mode.EDIT);
    }
  }

}
