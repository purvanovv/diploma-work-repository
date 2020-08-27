import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule, AnnouncementRoutingModule, FlexLayoutModule, MaterialModule,ReactiveFormsModule
  ], declarations: [CreateAnnouncementComponent]
})
export class AnnouncementModule { }
