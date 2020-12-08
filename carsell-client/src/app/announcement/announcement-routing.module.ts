import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { Shell } from '@app/shell/shell.service';
import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';
import { PreviewAnnouncementComponent } from './preview-announcement/preview-announcement.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'announcement/create', component: CreateAnnouncementComponent, data: { title: 'CreateAnnouncement' } },
    { path: 'announcement/list', component: ListAnnouncementsComponent },
    { path: 'announcement/preview/:id', component: PreviewAnnouncementComponent },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AnnouncementRoutingModule { }
