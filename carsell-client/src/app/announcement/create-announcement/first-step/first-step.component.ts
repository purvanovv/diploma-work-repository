import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Make, MainCategory, SubCategory, CategoryPair } from '@app/announcement/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  EngineType,
  AirConditionType,
  ConditionType,
  CoolingType,
  Currency,
  EmissionStandartType,
  EngineCategoryType,
  GearboxType,
  HeatingType,
  MaterialType,
  ToiletType,
  MainCategoryType,
} from '@app/announcement/enums';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { tap, mergeMap } from 'rxjs/operators';
import { Observable, concat, Subscription } from 'rxjs';
import { AnnouncementFormBuilder } from '@app/announcement/announcement.form.builder';
import { untilDestroyed } from '@app/@core';
import { trigger } from '@angular/animations';
import { AnnouncementStoreService } from '@app/announcement/announcement-store.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent implements OnInit, OnDestroy {
  public makeGroups: Map<string, Make[]>;
  public models: string[] = [];
  public categories: CategoryPair[];
  public subCategories: SubCategory[] = [];
  public regions: Map<string, string[]>;
  public cities: string[] = [];
  public createForm: FormGroup;
  public engineType = EngineType;
  public airConditionType = AirConditionType;
  public conditionType = ConditionType;
  public coolingType = CoolingType;
  public currency = Currency;
  public emissionStandartType = EmissionStandartType;
  public engineCategoryType = EngineCategoryType;
  public gearboxType = GearboxType;
  public heatingType = HeatingType;
  public materialType = MaterialType;
  public toiletType = ToiletType;
  public colors = ['Зелен', 'Червен', 'Черен', 'Син', 'Бял'];
  public validDays = [35, 49];
  public bicycleSizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 27, 28, 29];
  public numberOfGears = [3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 21, 24];

  public isFormInit = false;

  public initFormCategory: MainCategory = { id: 1, name: 'Автомобили и Джипове', value: 'CARS_AND_JEEPS' };

  private eventSubscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private announcementService: AnnouncementService,
    private announcementStoreService: AnnouncementStoreService) { }
  ngOnDestroy(): void {
    this.clearEventSubsriptions();
  }

  ngOnInit(): void {
    this.initForm();
    this.$initData()
      .pipe(
        mergeMap(() => {
          const categoryPair = this.categories.find((c) => c.mainCategory.id === this.initFormCategory.id);
          this.subCategories = categoryPair.subCategories;
          this.initEvents();
          return this.$initMakes(this.initFormCategory.id);
        }),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.isFormInit = true;
      });
  }

  public getEnumValue(name: string, enumeration: object) {
    return enumeration[name];
  }

  public submitForm() {
    this.announcementService
      .createAnnouncement(this.createForm.value)
      .pipe(untilDestroyed(this))
      .subscribe(
        (announcementId: number) => {
          this.announcementStoreService.setAnnouncementId(announcementId);
          this.announcementStoreService.changeStep(1);
          this.announcementStoreService.initDataSecondStep();
        },
        (err) => console.log(err)
      );
  }

  public containsControl(controlName: string): boolean {
    if (this.createForm.get(controlName)) {
      return true;
    }
    return false;
  }

  private clearEventSubsriptions(): void {
    this.eventSubscriptions.forEach((s) => {
      s.unsubscribe();
    });
    this.eventSubscriptions = [];
  }

  private $onChangeMainCategory(mainCategoryId: number): Observable<Map<string, Make[]>> {
    const categoryPair = this.categories.find((c) => c.mainCategory.id === mainCategoryId);
    this.subCategories = categoryPair.subCategories;
    this.initFormCategory = {
      id: categoryPair.mainCategory.id,
      name: categoryPair.mainCategory.name,
      value: categoryPair.mainCategory.value,
    };
    this.initForm();
    this.initEvents();
    return this.$initMakes(mainCategoryId);
  }

  private $initMakes(mainCategoryId: number): Observable<Map<string, Make[]>> {
    return this.announcementService.getMakes(mainCategoryId).pipe(
      tap((makeGroups: Map<string, Make[]>) => {
        this.makeGroups = makeGroups;
      })
    );
  }

  private $initData(): Observable<any> {
    const $initCategories = this.announcementService.getCategories().pipe(
      tap((categories: CategoryPair[]) => {
        this.categories = categories;
      })
    );

    const $initRegions = this.announcementService.getRegions().pipe(
      tap((regions: Map<string, string[]>) => {
        this.regions = regions;
      })
    );

    return concat($initCategories, $initRegions);
  }

  private initForm() {
    this.createForm = new AnnouncementFormBuilder(
      this.formBuilder,
      MainCategoryType[this.initFormCategory.value]
    ).build();
    this.createForm.get('mainCategoryId').setValue(this.initFormCategory.id);
    this.createForm.get('conditionType').setValue('USED');
  }

  private initEvents() {
    this.clearEventSubsriptions();
    const mainCategorySubsrc$ = this.createForm
      .get('mainCategoryId')
      .valueChanges.pipe(
        mergeMap((mainCategoryId) => {
          if (this.categories !== undefined) {
            return this.$onChangeMainCategory(mainCategoryId);
          }
        })
      )
      .subscribe();
    //this.eventSubscriptions.push(mainCategorySubsrc$);

    const makeSubscr$ = this.createForm
      .get('make')
      .valueChanges.pipe(
        tap((make: string) => {
          const groupName = make.substr(0, 1).toUpperCase();
          const makes: Make[] = this.makeGroups[groupName];
          this.models = makes.find((m) => m.make === make)?.models;
        })
      )
      .subscribe();
    this.eventSubscriptions.push(makeSubscr$);

    const regionSubscr$ = this.createForm
      .get('region')
      .valueChanges.pipe(
        tap((region: string) => {
          this.cities = this.regions[region];
        })
      )
      .subscribe();
    this.eventSubscriptions.push(regionSubscr$);
  }
}
