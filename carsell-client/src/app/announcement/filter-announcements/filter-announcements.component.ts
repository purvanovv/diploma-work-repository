import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { startWith, tap } from 'rxjs/operators';
import { EUR, orders, priceОrders, publishОrders, USD } from '../constants';
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
    const queryParams = this.route.snapshot.queryParamMap;
    const orderBy = queryParams.get('orderBy');
    const orderByPrice = queryParams.get('orderByPrice');
    const orderByPublished = queryParams.get('orderByPublished');

    this.filterForm = new FormGroup({
      orderBy: new FormControl(orderBy !== null ? Number(orderBy) : OrderBy.NEWEST),
      orderByPrice: new FormControl(orderByPrice !== null ? Number(orderByPrice) : OrderByPrice.LEV),
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
      .map(a => {
        const orderByPrice = filter.orderByPrice;
        let priceInLev = a.price;
        if (a.currency === Currency.EUR) {
          priceInLev = a.price * EUR;
        }
        else if (a.currency === Currency.USD) {
          priceInLev = a.price * USD;
        }
        if (orderByPrice === OrderByPrice.EUR) {
          a.price = priceInLev / EUR;
          a.currency = Currency.EUR;
        } else if (orderByPrice === OrderByPrice.USD) {
          a.price = priceInLev / USD;
          a.currency = Currency.USD;
        }
        else {
          a.price = priceInLev;
          a.currency = Currency.LEV;
        }
        return a;
      })
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
        const orderByPublished = filter.orderByPublished;
        if (orderByPublished === OrderByPublished.TODAY) {
          return this.isToday(new Date(a.metaProps.createdOn));
        } else if (orderByPublished === OrderByPublished.LAST_MONTH) {
          const targetDate = new Date();
          targetDate.setMonth(targetDate.getMonth() - 1);
          return new Date(a.metaProps.createdOn).getTime() >= targetDate.getTime();
        }

        else if (orderByPublished === OrderByPublished.LAST_FOURTEEN_DAYS) {
          const dateBefore14Days = new Date(new Date().getTime() - (14 * 24 * 60 * 60 * 1000));
          return new Date(a.metaProps.createdOn).getTime() >= dateBefore14Days.getTime();
        }

        else if (orderByPublished === OrderByPublished.LAST_SEVEN_DAYS) {
          const dateBefore7Days = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));
          return new Date(a.metaProps.createdOn).getTime() >= dateBefore7Days.getTime();
        }

        else if (orderByPublished === OrderByPublished.LAST_THREE_DAYS) {
          const dateBefore3Days = new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000));
          return new Date(a.metaProps.createdOn).getTime() >= dateBefore3Days.getTime();
        }

        else if (orderByPublished === OrderByPublished.ALL) {
          return true;
        }
      });
    this.filtered.emit(currAnnouncements);

  }

  isToday(targetDate: Date) {
    const today = new Date();
    return targetDate.getDate() === today.getDate() &&
      targetDate.getMonth() === today.getMonth() &&
      targetDate.getFullYear() === today.getFullYear();
  }


}
