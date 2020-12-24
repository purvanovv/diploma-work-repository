import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AnnouncementStoreService } from '../announcement-store.service';
import { AnnouncementPreview } from '../models';

@Component({
  selector: 'app-list-search-result',
  templateUrl: './list-search-result.component.html',
  styleUrls: ['./list-search-result.component.scss']
})
export class ListSearchResultComponent implements OnInit {
  selected: AnnouncementPreview[];
  itemsPerPage = 8;
  isLoading: boolean;
  currentPageIndex = 1;

  pagesData: Map<number, AnnouncementPreview[]>;
  constructor(private announcementStore: AnnouncementStoreService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.announcementStore.getAnnouncements$().pipe(tap((announcements: AnnouncementPreview[]) => {
      this.initPagesData(announcements);
      this.selected = this.pagesData.get(this.currentPageIndex);
      this.isLoading = false;
    })).subscribe();
  }

  initPagesData(announcements: AnnouncementPreview[]) {
    const countOfPages = Math.ceil(announcements.length / this.itemsPerPage);
    this.pagesData = new Map();
    for (let pageIndex = 1; pageIndex <= countOfPages; pageIndex++) {
      const itemsPerPage = Math.min(this.itemsPerPage, announcements.length);
      this.pagesData.set(pageIndex, announcements.splice(0, itemsPerPage));
    }
    console.log(this.pagesData);
  }

  select(pageIndex: number) {
    this.currentPageIndex = pageIndex;
    this.selected = this.pagesData.get(this.currentPageIndex);
  }

  prev() {
    if (this.currentPageIndex > 1) {
      this.currentPageIndex--;
      this.selected = this.pagesData.get(this.currentPageIndex);
    }
  }

  next() {
    if (this.currentPageIndex < this.pagesData.size) {
      this.currentPageIndex++;
      this.selected = this.pagesData.get(this.currentPageIndex);
    }
  }

}
