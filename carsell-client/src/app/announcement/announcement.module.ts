import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditAnnouncementComponent } from './create-edit-announcement/create-edit-announcement.component';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { FirstStepComponent } from './create-edit-announcement/first-step/first-step.component';
import { SecondStepComponent } from './create-edit-announcement/second-step/second-step.component';
import { ThirdStepComponent } from './create-edit-announcement/third-step/third-step.component';
import { PreviewImageModalComponent } from './create-edit-announcement/preview-image-modal/preview-image-modal.component';
import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';
import { PreviewAnnouncementComponent } from './preview-announcement/preview-announcement.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { ListSearchResultComponent } from './list-search-result/list-search-result.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterAnnouncementsComponent } from './filter-announcements/filter-announcements.component';
import { SearchAnnouncementsComponent } from './search-announcements/search-announcements.component';
import { UserModule } from '@app/user/user.module';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    UserModule,
  ],
  declarations: [
    CreateEditAnnouncementComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    PreviewImageModalComponent,
    ListAnnouncementsComponent,
    PreviewAnnouncementComponent,
    AnnouncementDetailsComponent,
    ListSearchResultComponent,
    PaginationComponent,
    FilterAnnouncementsComponent,
    SearchAnnouncementsComponent,
  ],
  exports: [ListAnnouncementsComponent],
})
export class AnnouncementModule {}
