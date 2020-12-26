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

  filterForm: FormGroup;
  orders = orders;
  ordersByPrice = priceОrders;
  ordersByPublish = publishОrders;
  filteredAnnouncements: AnnouncementPreview[];
  constructor(private announcementStore: AnnouncementStoreService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const announcements = Object.assign([], this.announcementStore.getAnnouncements());
    this.initFilterForm();
    this.initEvents();
    this.initPagesData(announcements);
    this.isLoading = false;

  }

  initPagesData(announcements: AnnouncementPreview[]) {
    console.log(announcements);
    const countOfPages = Math.ceil(announcements.length / this.itemsPerPage);
    this.pagesData = new Map();
    for (let pageIndex = 1; pageIndex <= countOfPages; pageIndex++) {
      const itemsPerPage = Math.min(this.itemsPerPage, announcements.length);
      this.pagesData.set(pageIndex, announcements.splice(0, itemsPerPage));
    }
    this.selected = this.pagesData.get(this.currentPageIndex);
  }

  onSelect(pageIndex: number) {
    this.selected = this.pagesData.get(pageIndex);
    this.currentPageIndex = pageIndex;
  }

  initFilterForm() {
    this.filterForm = new FormGroup({
      orderBy: new FormControl(OrderBy.NEWEST),
      orderByPrice: new FormControl(OrderByPrice.ALL),
      orderByPublished: new FormControl(OrderByPublished.ALL)
    })
  }

  initEvents() {
    this.filterForm.valueChanges.pipe(
      startWith(this.filterForm.value),
      tap(filter => {
        this.filter(filter);
        this.initPagesData(this.filteredAnnouncements);
      })
    ).subscribe();


  }

  filter(filter: any) {
    let currAnnouncements = Object.assign([], this.announcementStore.getAnnouncements());
    if (currAnnouncements === undefined) {
      filter(filter);
    }
    currAnnouncements = currAnnouncements
      .sort((a, b) => {
        const orderBy = filter.orderBy
        if (orderBy === OrderBy.PRICE_LOWEST) {
          return a.price - b.price;
        } else if (orderBy === OrderBy.PRICE_HIGHEST) {
          return b.price - a.price;
        } else if (orderBy === OrderBy.NEWEST) {
          return new Date(b.metaProps.createdOn).getTime() - new Date(a.metaProps.createdOn).getTime();
        }
      })
      .filter(a => {
        const orderByPrice = filter.orderByPrice;
        if (orderByPrice === OrderByPrice.EUR) {
          return a.currency === Currency.EUR;
        } else if (orderByPrice === OrderByPrice.LEV) {
          return a.currency === Currency.LEV;
        } else if (orderByPrice === OrderByPrice.USD) {
          return a.currency === Currency.USD;
        } else if (orderByPrice === OrderByPrice.ALL) {
          return true;
        }
      }).filter(a => {
        const orderByPublished = filter.orderByPublished;
        let targetDate = new Date();
        if (orderByPublished === OrderByPublished.TODAY) {
          return new Date(a.metaProps.createdOn).getDay() === targetDate.getDay();
        } else if (orderByPublished === OrderByPublished.LAST_MONTH) {
          targetDate.setMonth(targetDate.getMonth() - 1);
          return new Date(a.metaProps.createdOn).getTime() >= targetDate.getTime();
        } else if (orderByPublished === OrderByPublished.LAST_FOURTEEN_DAYS) {
          targetDate = new Date(targetDate.getTime() - (14 * 24 * 60 * 60 * 1000));
          return new Date(a.metaProps.createdOn).getDay() >= targetDate.getDay();
        } else if (orderByPublished === OrderByPublished.LAST_SEVEN_DAYS) {
          targetDate = new Date(targetDate.getTime() - (7 * 24 * 60 * 60 * 1000));
          return new Date(a.metaProps.createdOn).getDay() >= targetDate.getDay();
        } else if (orderByPublished === OrderByPublished.LAST_THREE_DAYS) {
          targetDate = new Date(targetDate.getTime() - (3 * 24 * 60 * 60 * 1000));
          return new Date(a.metaProps.createdOn).getDay() >= targetDate.getDay();
        } else if (orderByPublished === OrderByPublished.ALL) {
          return true;
        }
      });
    this.filteredAnnouncements = Object.assign([], currAnnouncements);

    this.print(currAnnouncements);
  }
  print(announcements: AnnouncementPreview[]) {
    for (const a of announcements) {
      console.log(`id: ${a.id}, price: ${a.price}, createdOn: ${a.metaProps.createdOn}, currency: ${a.currency}`);
    }

  }
}




