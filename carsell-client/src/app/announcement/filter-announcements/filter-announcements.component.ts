import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { startWith, tap } from 'rxjs/operators';
import { orders, priceОrders, publishОrders } from '../constants';
import { OrderBy, OrderByPrice, OrderByPublished, Currency } from '../enums';
import { AnnouncementPreview } from '../models';

@Component({
  selector: 'app-filter-announcements',
  templateUrl: './filter-announcements.component.html',
  styleUrls: ['./filter-announcements.component.scss']
})
export class FilterAnnouncementsComponent implements OnInit {
  filterForm: FormGroup;
  orders = orders;
  ordersByPrice = priceОrders;
  ordersByPublish = publishОrders;

  @Input() announcements: AnnouncementPreview[];
  @Output() filtered = new EventEmitter<AnnouncementPreview[]>();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initFilterForm();
    this.initEvents();
  }

  initFilterForm() {
    console.log(Number(null));
    const queryParams = this.route.snapshot.queryParamMap;
    const orderBy = queryParams.get('orderBy');
    const orderByPrice = queryParams.get('orderByPrice');
    const orderByPublished = queryParams.get('orderByPublished');

    this.filterForm = new FormGroup({
      orderBy: new FormControl(orderBy !== null ? Number(orderBy) : OrderBy.NEWEST),
      orderByPrice: new FormControl(orderByPrice !== null ? Number(orderByPrice) : OrderByPrice.ALL),
      orderByPublished: new FormControl(orderByPublished !== null ? Number(orderByPublished) : OrderByPublished.ALL)
    })
  }

  initEvents() {
    this.filterForm.valueChanges.pipe(
      startWith(this.filterForm.value),
      tap(filter => {
        this.filter(filter);
      })
    ).subscribe();
  }

  filter(filter: any) {
    let currAnnouncements = Object.assign([], this.announcements);
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
    this.filtered.emit(currAnnouncements);

  }

}
