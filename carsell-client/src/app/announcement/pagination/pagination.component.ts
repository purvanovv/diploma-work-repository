import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() totalPages: number | undefined = undefined
  @Input() maxPageIndexes = 3;
  @Input() currentPageIndex = 1;
  @Output() selected = new EventEmitter<number>();
  pageIndexes: number[] | undefined = undefined;

  constructor() { }

  ngOnChanges(): void {
    this.initPageIndexes();
  }

  initPageIndexes() {
    if (this.pageIndexes === undefined || this.pageIndexes.length <= 0) {
      const totalPageIndexes = Math.min(this.totalPages, this.maxPageIndexes);
      let firstPageIndex: number;
      if (this.currentPageIndex > 1 &&
        this.currentPageIndex <= this.totalPages &&
        this.totalPages > this.maxPageIndexes) {
        const indexRange = Math.ceil(this.currentPageIndex / this.maxPageIndexes);
        firstPageIndex = this.maxPageIndexes * indexRange - this.maxPageIndexes + 1;
      } else {
        firstPageIndex = 1;
      }
      const lastPageIndex = firstPageIndex + totalPageIndexes - 1;
      this.pageIndexes = [];
      for (let index = firstPageIndex; index <= lastPageIndex; index++) {
        this.pageIndexes.push(index);
      }
    } else {
      const totalPageIndexes = Math.min(this.totalPages, this.maxPageIndexes);
      if (totalPageIndexes <= 0) {
        this.pageIndexes = [];
      }
      else if (this.currentPageIndex >= this.pageIndexes[this.pageIndexes.length - 1]
        && this.currentPageIndex <= this.totalPages) {
        const lastPageIndex = Math.min(this.currentPageIndex + totalPageIndexes - 1, this.totalPages);
        const firstPageIndex = lastPageIndex - totalPageIndexes + 1 < 1 ? 1 : lastPageIndex - totalPageIndexes + 1;
        this.pageIndexes = [];
        for (let index = firstPageIndex; index <= lastPageIndex; index++) {
          this.pageIndexes.push(index);
        }
      }
      else if (this.currentPageIndex <= this.pageIndexes[0] && this.currentPageIndex >= 1) {
        const firstPageIndex =
          this.currentPageIndex - totalPageIndexes + 1 < 1 ? 1 : this.currentPageIndex - totalPageIndexes + 1;
        const lastPageIndex = Math.min(firstPageIndex + totalPageIndexes - 1, this.totalPages);
        this.pageIndexes = [];
        for (let index = firstPageIndex; index <= lastPageIndex; index++) {
          this.pageIndexes.push(index);
        }
      }
    }
  }

  select(pageIndex: number) {
    if (pageIndex !== this.currentPageIndex) {
      this.selected.emit(pageIndex);
    }
  }

  prev() {
    if (this.currentPageIndex > 1) {
      this.selected.emit(this.currentPageIndex - 1);
    }
  }

  next() {
    if (this.currentPageIndex < this.totalPages) {
      this.selected.emit(this.currentPageIndex + 1);
    }
  }

  showFirst(): boolean {
    return this.pageIndexes[0] > 1;
  }

  showLast(): boolean {
    return this.pageIndexes[this.pageIndexes.length - 1] < this.totalPages;
  }

}
