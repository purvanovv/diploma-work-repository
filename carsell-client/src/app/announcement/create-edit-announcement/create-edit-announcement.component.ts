import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from '@app/@core';
import { AnnouncementStoreService } from '../announcement-store.service';
import { modeStepLabels } from '../constants';
import { Mode } from '../enums';

@Component({
  selector: 'app-create-edit-announcement',
  templateUrl: './create-edit-announcement.component.html',
  styleUrls: ['./create-edit-announcement.component.scss'],
})
export class CreateEditAnnouncementComponent implements OnInit, OnDestroy {
  public isEditable = false;
  public completed = false;
  public announcementId: number;
  public stepLabel: string[];

  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    private announcementStoreService: AnnouncementStoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initStepLabel();

    this.announcementStoreService.changeStep$
      .pipe(untilDestroyed(this))
      .subscribe((step: number) => {
        console.log(step);
        if (step !== undefined) {
          this.stepper.selected.completed = true;
          this.stepper.next();
        }
      })
  }

  ngOnDestroy() { 
    this.announcementStoreService.changeStep(undefined);
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
