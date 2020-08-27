import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'announcement/create', component: CreateAnnouncementComponent, data: { title: 'CreateAnnouncement' } }]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AnnouncementRoutingModule { }
