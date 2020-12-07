import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { Shell } from '@app/shell/shell.service';
import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'announcement/create', component: CreateAnnouncementComponent, data: { title: 'CreateAnnouncement' } },
    { path: 'announcement/list', component: ListAnnouncementsComponent },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AnnouncementRoutingModule { }
