import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { pipe } from 'rxjs';
import { filter, finalize, startWith, tap } from 'rxjs/operators';
import { AnnouncementStoreService } from '../announcement-store.service';
import { orders, priceОrders, publishОrders } from '../constants';
import { Currency, OrderBy, OrderByPrice, OrderByPublished } from '../enums';
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
  maxPageIndexes = 4;
  pagesData: Map<number, AnnouncementPreview[]>;
  announcements: AnnouncementPreview[];
  constructor(private announcementStore: AnnouncementStoreService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.announcements = this.announcementStore.getAnnouncements();
    this.initPagesData(this.announcements);
    this.isLoading = false;
  }

  initPagesData(announcements: AnnouncementPreview[]) {
    const currAnnouncements = Object.assign([], announcements);
    const countOfPages = Math.ceil(currAnnouncements.length / this.itemsPerPage);
    this.pagesData = new Map();
    for (let pageIndex = 1; pageIndex <= countOfPages; pageIndex++) {
      const itemsPerPage = Math.min(this.itemsPerPage, currAnnouncements.length);
      this.pagesData.set(pageIndex, currAnnouncements.splice(0, itemsPerPage));
    }
    this.selected = this.pagesData.get(this.currentPageIndex);
  }

  onSelect(pageIndex: number) {
    this.selected = this.pagesData.get(pageIndex);
    this.currentPageIndex = pageIndex;
  }

  onFilter(filteredAnnouncements: AnnouncementPreview[]) {
    this.initPagesData(filteredAnnouncements);
  }

}




