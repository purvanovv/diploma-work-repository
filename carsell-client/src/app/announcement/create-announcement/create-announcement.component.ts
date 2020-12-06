import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AnnouncementStoreService } from '../announcement-store.service';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss'],
})
export class CreateAnnouncementComponent implements OnInit {
  public isEditable = false;
  public isLinear = false;
  public completed = false;
  public announcementId: number;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(private announcementStoreService: AnnouncementStoreService) { }

  ngOnInit() {
    this.announcementStoreService.changeStep$.subscribe((step: number) => {
      if (step !== undefined) {
        this.stepper.selected.completed = true;
        this.stepper.next();
      }
    })
  }

}
