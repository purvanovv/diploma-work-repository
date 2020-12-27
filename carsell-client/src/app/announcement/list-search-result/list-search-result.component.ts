import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { AnnouncementStoreService } from '../announcement-store.service';
import { AnnouncementService } from '../announcement.service';
import { AnnouncementPreview, AnnouncementSearch } from '../models';

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
  maxPageIndexes = 6;
  pagesData: Map<number, AnnouncementPreview[]>;
  announcements: AnnouncementPreview[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private announcementStore: AnnouncementStoreService,
    private announcementService: AnnouncementService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.announcements = this.announcementStore.getAnnouncements();
    if (this.announcements.length <= 0) {
      this.$initAnnouncements().pipe(tap(() => {
        this.announcements = this.announcementStore.getAnnouncements();
        this.initPagesData(this.announcements);
        this.isLoading = false;
      })).subscribe();
    }
    else {
      this.initPagesData(this.announcements);
      this.isLoading = false;
    }

  }

  $initAnnouncements() {
    const queryParams = this.route.snapshot.queryParamMap;
    const searchData: AnnouncementSearch = { mainCategoryId: queryParams.get('mainCategoryId') }
    return this.announcementService.searchAnnouncements(
      searchData)
      .pipe(
        take(1),
        tap((announcements: AnnouncementPreview[]) => {
          this.announcementStore.setAnnouncements(announcements);
        }))
  }

  initPagesData(announcements: AnnouncementPreview[]) {
    const queryParams = this.route.snapshot.queryParamMap;
    if (queryParams.get('currentPageIndex') != null &&
      (Number(queryParams.get('currentPageIndex')) <= announcements.length)) {
      this.currentPageIndex = Number(queryParams.get('currentPageIndex'));
    } else {
      this.currentPageIndex = 1;
      this.router.navigate([], { queryParams: { currentPageIndex: 1 }, queryParamsHandling: 'merge' });
    }

    this.pagesData = new Map();
    this.selected = [];

    if (announcements !== undefined && announcements.length > 0) {
      const currAnnouncements = Object.assign([], announcements);
      const countOfPages = Math.ceil(currAnnouncements.length / this.itemsPerPage);
      for (let pageIndex = 1; pageIndex <= countOfPages; pageIndex++) {
        const itemsPerPage = Math.min(this.itemsPerPage, currAnnouncements.length);
        this.pagesData.set(pageIndex, currAnnouncements.splice(0, itemsPerPage));
      }
      this.selected = this.pagesData.get(this.currentPageIndex);
    }
  }

  onSelect(pageIndex: number) {
    this.selected = this.pagesData.get(pageIndex);
    this.currentPageIndex = pageIndex;
    this.router.navigate([], { queryParams: { currentPageIndex: pageIndex }, queryParamsHandling: 'merge' });
  }

  onFilter(filteredAnnouncements: AnnouncementPreview[]) {
    this.initPagesData(filteredAnnouncements);
  }

}




