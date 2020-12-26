import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditAnnouncementComponent } from './create-edit-announcement/create-edit-announcement.component';
import { Shell } from '@app/shell/shell.service';
import { PreviewAnnouncementComponent } from './preview-announcement/preview-announcement.component';
import { ListSearchResultComponent } from './list-search-result/list-search-result.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'announcement/create', component: CreateEditAnnouncementComponent, data: { title: 'CreateAnnouncement' } },
    { path: 'announcement/list', component: ListSearchResultComponent },
    { path: 'announcement/preview/:id', component: PreviewAnnouncementComponent },
    { path: 'announcement/edit/:id', component: CreateEditAnnouncementComponent }
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AnnouncementRoutingModule { }
