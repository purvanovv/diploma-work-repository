import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concat } from 'rxjs';
import { finalize, mergeMap, startWith, take, tap } from 'rxjs/operators';
import { AnnouncementStoreService } from '../announcement-store.service';
import { AnnouncementSearchFormBuilder } from '../announcement.search.form.builder';
import { AnnouncementService } from '../announcement.service';
import {
  AirConditionType,
  ConditionType,
  CoolingType,
  Currency,
  EmissionStandartType,
  EngineCategoryType,
  EngineType,
  GearboxType,
  HeatingType,
  MainCategoryType,
  MaterialType,
  ToiletType,
} from '../enums';
import { AnnouncementPreview, AnnouncementSearchModel, CategoryPair, MainCategory, Make, SubCategory } from '../models';

@Component({
  selector: 'app-search-announcements',
  templateUrl: './search-announcements.component.html',
  styleUrls: ['./search-announcements.component.scss'],
})
export class SearchAnnouncementsComponent implements OnInit {
  isLoading = false;
  searchForm: FormGroup;
  initMainCategory: MainCategory;
  makeGroups: Map<string, Make[]>;
  categories: CategoryPair[];
  regions: Map<string, string[]>;
  models: string[] = [];
  years: string[];
  cities: string[] = [];
  subCategories: SubCategory[] = [];

  engineType = EngineType;
  airConditionType = AirConditionType;
  conditionType = ConditionType;
  coolingType = CoolingType;
  currency = Currency;
  emissionStandartType = EmissionStandartType;
  engineCategoryType = EngineCategoryType;
  gearboxType = GearboxType;
  heatingType = HeatingType;
  materialType = MaterialType;
  toiletType = ToiletType;
  colors = ['Зелен', 'Червен', 'Черен', 'Син', 'Бял'];
  validDays = [35, 49];
  bicycleSizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 27, 28, 29];
  numberOfGears = [3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 21, 24];

  constructor(
    private formBuilder: FormBuilder,
    private announcementService: AnnouncementService,
    private route: ActivatedRoute,
    private announcementStore: AnnouncementStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initYears();
    this.initFormCategory();
    this.init().subscribe();
  }

  init() {
    this.isLoading = true;
    return this.initData().pipe(
      finalize(() => {
        this.initForm();
        this.initEvents();
        this.isLoading = false;
      })
    );
  }

  initFormCategory() {
    const queryParams = this.route.snapshot.queryParamMap;
    if (queryParams.get('mainCategoryId') != null) {
      this.initMainCategory = { id: Number(queryParams.get('mainCategoryId')) };
    } else {
      this.initMainCategory = { id: 1, name: 'Автомобили и Джипове', value: 'CARS_AND_JEEPS' };
    }
  }

  initData(): Observable<any> {
    const $initCategories = this.announcementService.getCategories().pipe(
      take(1),
      tap((categories: CategoryPair[]) => {
        this.categories = categories;
        const categoryPair = this.categories.find((c) => c.mainCategory.id === this.initMainCategory.id);
        this.initMainCategory = categoryPair.mainCategory;
        this.subCategories = categoryPair.subCategories;
      })
    );

    const $initMakes = this.$initMakes(this.initMainCategory.id);

    const $initRegions = this.announcementService.getRegions().pipe(
      take(1),
      tap((regions: Map<string, string[]>) => {
        this.regions = regions;
      })
    );

    return concat($initCategories, $initMakes, $initRegions);
  }

  $initMakes(mainCategoryId: number): Observable<Map<string, Make[]>> {
    return this.announcementService.getMakes(mainCategoryId).pipe(
      take(1),
      tap((makeGroups: Map<string, Make[]>) => {
        this.makeGroups = makeGroups;
        this.models = [];
      })
    );
  }

  initForm() {
    const queryParams = this.route.snapshot.queryParamMap;
    const searchData = AnnouncementSearchModel.fromQueryParams(queryParams);
    this.searchForm = new AnnouncementSearchFormBuilder(this.formBuilder, MainCategoryType[this.initMainCategory.value])
      .withSearchData(searchData)
      .build();
    this.searchForm.get('mainCategoryId').setValue(this.initMainCategory.id);
  }

  initEvents() {
    const mainCategorySubsrc$ = this.searchForm
      .get('mainCategoryId')
      .valueChanges.pipe(
        take(1),
        mergeMap((mainCategoryId) => {
          if (this.categories !== undefined) {
            this.onChangeMainCategory(mainCategoryId);
            return this.init();
          }
        })
      )
      .subscribe();

    const makeSubscr$ = this.searchForm
      .get('make')
      .valueChanges.pipe(
        startWith(this.searchForm.get('make').value),
        tap((make: string) => {
          if (make !== null && make.trim() !== '') {
            const groupName = make.substr(0, 1).toUpperCase();
            const makes: Make[] = this.makeGroups[groupName];
            this.models = makes.find((m) => m.make === make)?.models;
          }
        })
      )
      .subscribe();

    const regionSubscr$ = this.searchForm
      .get('region')
      .valueChanges.pipe(
        startWith(this.searchForm.get('region').value),
        tap((region: string) => {
          if (region !== null && region.trim() !== '') {
            this.cities = this.regions[region];
          }
        })
      )
      .subscribe();
  }

  onChangeMainCategory(mainCategoryId: number) {
    const categoryPair = this.categories.find((c) => c.mainCategory.id === mainCategoryId);
    this.initMainCategory = {
      id: categoryPair.mainCategory.id,
      name: categoryPair.mainCategory.name,
      value: categoryPair.mainCategory.value,
    };
  }

  containsControl(controlName: string): boolean {
    if (this.searchForm.get(controlName)) {
      return true;
    }
    return false;
  }

  initYears() {
    this.years = [];
    const max = new Date().getFullYear();
    const min = max - 100;
    for (let i = min; i <= max; i++) {
      this.years.push(i.toString());
    }
  }

  getEnumValue(name: string, enumeration: object) {
    return enumeration[name];
  }

  submitSearchForm() {
    this.$initAnnouncements().subscribe(() => {
      const queryParams = AnnouncementSearchModel.toQueryParams(this.searchForm.getRawValue());
      this.router.navigate(['announcement/list'], { queryParams });
    });
  }

  $initAnnouncements() {
    return this.announcementService.searchAnnouncements(this.searchForm.getRawValue()).pipe(
      take(1),
      tap((announcements: AnnouncementPreview[]) => {
        this.announcementStore.setAnnouncements(announcements);
      })
    );
  }

  clean() {
    this.init().subscribe(() => this.router.navigate([]));
  }
}
