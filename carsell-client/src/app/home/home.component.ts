import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { convertToParamMap, Params, Router } from '@angular/router';
import { AnnouncementStoreService } from '@app/announcement/announcement-store.service';
import { AnnouncementSearchFormBuilder } from '@app/announcement/announcement.search.form.builder';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { MainCategoryType } from '@app/announcement/enums';
import { AnnouncementPreview, AnnouncementSearchModel, CategoryPair, MainCategory, Make } from '@app/announcement/models';
import ResizeObserver from 'resize-observer-polyfill';
import { concat, Observable } from 'rxjs';
import { finalize, mergeMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: false }) container: ElementRef;
  @ViewChild('mainMatCard', { static: false }) mainMatCard: MatCard;
  quote: string | undefined;
  isLoading = false;
  showAll = false;
  countOfItemsToList = 6;
  announcements: AnnouncementPreview[];
  makeGroups: Map<string, Make[]>;
  categories: CategoryPair[];
  regions: Map<string, string[]>;
  models: string[] = [];
  // subCategories: SubCategory[] = [];
  searchForm: FormGroup;
  initFormCategory: MainCategory = { id: 1, name: 'Автомобили и Джипове', value: 'CARS_AND_JEEPS' };
  years: string[];
  mainMatCardWidth: string = undefined;


  constructor(
    private announcementService: AnnouncementService,
    private router: Router,
    private formBuilder: FormBuilder,
    private announcementStore: AnnouncementStoreService) {
  }

  ngAfterViewInit() {
    const resizeObserver = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const numOfColumns = Math.floor(cr.width / 280);
      const mainMatCardWidth = numOfColumns * 280 + 48;
      this.mainMatCardWidth = mainMatCardWidth + 'px';
    });
    resizeObserver.observe(this.container.nativeElement);
  }

  ngOnInit() {
    this.initYears();
    this.announcementStore.getAnnouncements$().pipe(tap((announcements: AnnouncementPreview[]) => {
      this.showAll = false;
      if (announcements.length > this.countOfItemsToList) {
        this.showAll = true;
      }
      this.announcements = announcements;
    })).subscribe();
    this.init().subscribe();
  }

  init() {
    this.isLoading = true;
    this.initForm();
    return this.initData().pipe(finalize(() => {
      this.initEvents()
      this.isLoading = false;
    }))
  }

  submitSearchForm() {
    this.$initAnnouncements().subscribe();
  }

  containsControl(controlName: string): boolean {
    if (this.searchForm.get(controlName)) {
      return true;
    }
    return false;
  }

  showAllAnnouncements() {
    const queryParams = AnnouncementSearchModel.toQueryParams(this.searchForm.getRawValue());
    this.router.navigate(['announcement/list'], { queryParams });
  }

  clean() {
    this.init().subscribe();
  }

  private initYears() {
    this.years = [];
    const max = new Date().getFullYear();
    const min = max - 100;
    for (let i = min; i <= max; i++) {
      this.years.push(i.toString());
    }
  }

  private initForm() {
    this.searchForm =
      new AnnouncementSearchFormBuilder(this.formBuilder, MainCategoryType[this.initFormCategory.value])
        .build();
    this.searchForm.get('mainCategoryId').setValue(this.initFormCategory.id);
  }

  private initData(): Observable<any> {
    const $initAnnouncements = this.$initAnnouncements();

    const $initCategories = this.announcementService.getCategories().pipe(
      take(1),
      tap((categories: CategoryPair[]) => {
        this.categories = categories;
        const categoryPair = this.categories.find((c) => c.mainCategory.id === this.initFormCategory.id);
        // this.subCategories = categoryPair.subCategories;
      })
    );

    const $initMakes = this.$initMakes(this.initFormCategory.id);

    const $initRegions = this.announcementService.getRegions().pipe(
      take(1),
      tap((regions: Map<string, string[]>) => {
        this.regions = regions;
      })
    );

    return concat($initAnnouncements, $initCategories, $initMakes, $initRegions);
  }

  private $initAnnouncements() {
    return this.announcementService.searchAnnouncements(
      this.searchForm.getRawValue())
      .pipe(
        take(1),
        tap((announcements: AnnouncementPreview[]) => {
          this.announcementStore.setAnnouncements(announcements);
        }))
  }

  private initEvents() {
    // add clear events
    const mainCategorySubsrc$ = this.searchForm
      .get('mainCategoryId')
      .valueChanges.pipe(
        take(1),
        mergeMap((mainCategoryId) => {
          if (this.categories !== undefined) {
            this.onChangeMainCategory(mainCategoryId);
            return this.init();
          }
        }),
      )
      .subscribe();

    const makeSubscr$ = this.searchForm
      .get('make')
      .valueChanges.pipe(
        tap((make: string) => {
          const groupName = make.substr(0, 1).toUpperCase();
          const makes: Make[] = this.makeGroups[groupName];
          this.models = makes.find((m) => m.make === make)?.models;
        })
      )
      .subscribe();
  }

  private $initMakes(mainCategoryId: number): Observable<Map<string, Make[]>> {
    return this.announcementService.getMakes(mainCategoryId).pipe(
      take(1),
      tap((makeGroups: Map<string, Make[]>) => {
        this.makeGroups = makeGroups;
        this.models = [];
      })
    );
  }

  private onChangeMainCategory(mainCategoryId: number) {
    const categoryPair = this.categories.find((c) => c.mainCategory.id === mainCategoryId);
    // this.subCategories = categoryPair.subCategories;
    this.initFormCategory = {
      id: categoryPair.mainCategory.id,
      name: categoryPair.mainCategory.name,
      value: categoryPair.mainCategory.value,
    };
  }



}
