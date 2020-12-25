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
  pages: number[] | undefined = undefined;

  selected: AnnouncementPreview[];
  itemsPerPage = 8;
  isLoading: boolean;
  currentPageIndex = 1;
  maxPageIndexes = 4;
  pagesData: Map<number, AnnouncementPreview[]>;
  constructor(private announcementStore: AnnouncementStoreService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.announcementStore.getAnnouncements$().pipe(tap((announcements: AnnouncementPreview[]) => {
      this.initPagesData(announcements);
      this.initPageIndexes();
      this.selected = this.pagesData.get(this.currentPageIndex);
      this.isLoading = false;
    })).subscribe();
  }

  initPageIndexes() {
    if (this.pages === undefined) {
      const totalPageIndexes = Math.min(this.pagesData.size, this.maxPageIndexes);
      const firstPageIndex = this.currentPageIndex;
      const lastPageIndex = firstPageIndex + totalPageIndexes - 1;
      this.pages = [];
      for (let index = firstPageIndex; index <= lastPageIndex; index++) {
        this.pages.push(index);
      }
    } else {
      const totalPageIndexes = Math.min(this.pagesData.size, this.maxPageIndexes);
      if (this.currentPageIndex >= this.pages[this.pages.length - 1] && this.currentPageIndex <= this.pagesData.size) {
        const lastPageIndex = Math.min(this.currentPageIndex + totalPageIndexes - 1, this.pagesData.size);
        const firstPageIndex = lastPageIndex - totalPageIndexes + 1 < 1 ? 1 : lastPageIndex - totalPageIndexes + 1;
        this.pages = [];
        for (let index = firstPageIndex; index <= lastPageIndex; index++) {
          this.pages.push(index);
        }
      }
      else if (this.currentPageIndex <= this.pages[0] && this.currentPageIndex >= 1) {
        const firstPageIndex = this.currentPageIndex - totalPageIndexes + 1 < 1 ? 1 : this.currentPageIndex - totalPageIndexes + 1;
        const lastPageIndex = Math.min(firstPageIndex + totalPageIndexes - 1, this.pagesData.size);
        this.pages = [];
        for (let index = firstPageIndex; index <= lastPageIndex; index++) {
          this.pages.push(index);
        }
      }
    }

  }

  initPagesData(announcements: AnnouncementPreview[]) {
    const countOfPages = Math.ceil(announcements.length / this.itemsPerPage);
    this.pagesData = new Map();
    for (let pageIndex = 1; pageIndex <= countOfPages; pageIndex++) {
      const itemsPerPage = Math.min(this.itemsPerPage, announcements.length);
      this.pagesData.set(pageIndex, announcements.splice(0, itemsPerPage));
    }
  }

  select(pageIndex: number) {
    console.log(pageIndex);
    this.currentPageIndex = pageIndex;
    this.initPageIndexes();
    this.selected = this.pagesData.get(this.currentPageIndex);
  }

  prev() {
    if (this.currentPageIndex > 1) {
      this.currentPageIndex--;
      this.initPageIndexes();
      this.selected = this.pagesData.get(this.currentPageIndex);
    }
  }

  next() {
    if (this.currentPageIndex < this.pagesData.size) {
      this.currentPageIndex++;
      this.initPageIndexes();
      this.selected = this.pagesData.get(this.currentPageIndex);
    }
  }

  showFirst(): boolean {
    return this.pages[0] > 1;
  }

  showLast(): boolean {
    return this.pages[this.pages.length - 1] < this.pagesData.size;
  }

}
