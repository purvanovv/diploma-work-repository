import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { FirstStepComponent } from './create-announcement/first-step/first-step.component';
import { SecondStepComponent } from './create-announcement/second-step/second-step.component';
import { ThirdStepComponent } from './create-announcement/third-step/third-step.component';
import { PreviewImageModalComponent } from './create-announcement/preview-image-modal/preview-image-modal.component';
import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CreateAnnouncementComponent, FirstStepComponent, SecondStepComponent, ThirdStepComponent, PreviewImageModalComponent, ListAnnouncementsComponent],
})
export class AnnouncementModule {}
