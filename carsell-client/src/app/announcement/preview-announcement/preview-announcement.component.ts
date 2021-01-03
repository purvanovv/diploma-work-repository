import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '@app/@shared/confirmation-dialog/confirmation-dialog.component';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AnnouncementService } from '../announcement.service';
import { AnnouncementPreview, ConfirmDialogDataModel } from '../models';

@Component({
  selector: 'app-preview-announcement',
  templateUrl: './preview-announcement.component.html',
  styleUrls: ['./preview-announcement.component.scss']
})
export class PreviewAnnouncementComponent implements OnInit {

  public announcement: AnnouncementPreview;
  private announcementId: number;

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.announcementId = Number(this.route.snapshot.paramMap.get('id'));
    this.announcementService
      .getAnnouncementPreview(this.announcementId)
      .subscribe((announcement: AnnouncementPreview) => {
        console.log(announcement);
        this.announcement = announcement;
      })
  }

  edit(id: number) {
    this.router.navigate([`announcement/edit/${id}`]);
  }

  remove(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: new ConfirmDialogDataModel('Потвърждение за изтриване', 'Сигурни ли сте, че искате да изтриете обявата?')
    })

    dialogRef.afterClosed().pipe(mergeMap(dialogResult => {
      if (dialogResult) {
        return this.announcementService.removeAnnouncementById(id).pipe(mergeMap(() => {
          return of(true);
        }));
      } else {
        return of(false);
      }
    })).subscribe(result => {
      if (result) {
        this.router.navigate(['home']);
      }
    })


  }

}
