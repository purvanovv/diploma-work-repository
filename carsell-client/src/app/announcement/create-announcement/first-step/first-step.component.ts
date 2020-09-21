import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Make, MainCategory, SubCategory } from '@app/announcement/models';
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
  MainCategoryType
} from '@app/announcement/enums';
import { AnnouncementService } from '@app/announcement/announcement.service';
import { tap, startWith, mergeMap } from 'rxjs/operators';
import { Observable, concat } from 'rxjs';
import { AnnouncementFormBuilder } from '@app/announcement/announcement.form.builder';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent implements OnInit {
  public makeGroups: Map<string, Make[]>;
  public models: string[] = [];
  public mainCategories: MainCategory[];
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

  private initFormCategory = { categoryId: 1, category: MainCategoryType.CARS_AND_JEEPS };

  @Output() onSubmitAnnouncement: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder, private announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.$initData()
      .pipe(mergeMap(() => {
        const mainCategory = this.mainCategories.find((c) => c.id == this.initFormCategory.categoryId);
        this.subCategories = mainCategory.subCategories;
        this.initEvents();
        return this.$initMakes(this.initFormCategory.categoryId);
      }))
      .subscribe();
  }


  private $onChangeMainCategory(mainCategoryId: number): Observable<Map<String, Make[]>> {
    const mainCategory = this.mainCategories.find((c) => c.id == mainCategoryId);
    this.subCategories = mainCategory.subCategories;

    this.initFormCategory = { categoryId: mainCategoryId, category: MainCategoryType[mainCategory.value] };
    this.initForm();
    this.initEvents();

    return this.$initMakes(mainCategoryId);
  }

  private $initMakes(mainCategoryId: number): Observable<Map<string, Make[]>> {
    return this.announcementService.getMakes(mainCategoryId).pipe(
      tap((makeGroups: Map<string, Make[]>) => {
        this.makeGroups = makeGroups;
      }));
  }

  public getEnumValue(name: string, enumeration: object) {
    return enumeration[name];
  }

  public submitForm() {
    this.announcementService
      .createAnnouncement(this.createForm.value)
      .pipe(
        tap((announcementId: number) => {
          this.onSubmitAnnouncement.emit(announcementId);
        })
      )
      .subscribe();
  }

  private $initData(): Observable<any> {
    const $initCategories = this.announcementService.getCategories().pipe(
      tap((mainCategories: MainCategory[]) => {
        this.mainCategories = mainCategories;
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
    this.createForm = new AnnouncementFormBuilder(this.formBuilder, this.initFormCategory.category).construct();
    this.createForm.get('mainCategoryId').setValue(this.initFormCategory.categoryId);
    this.createForm.get('conditionType').setValue('USED');

  }

  public containsControl(controlName: string): boolean {
    if (this.createForm.get(controlName)) {
      return true;
    }
    return false;
  }

  private initEvents() {
    this.createForm
      .get('mainCategoryId')
      .valueChanges.pipe(
        mergeMap((mainCategoryId: number) => {
          if (this.mainCategories != undefined) {
            return this.$onChangeMainCategory(mainCategoryId);
          }
        })
      )
      .subscribe();

    this.createForm
      .get('make')
      .valueChanges.pipe(
        tap((make: string) => {
          const groupName = make.substr(0, 1).toUpperCase();
          const makes: Make[] = this.makeGroups[groupName];
          this.models = makes.find((m) => m.make == make)?.models;
        })
      )
      .subscribe();

    this.createForm
      .get('region')
      .valueChanges.pipe(
        tap((region: string) => {
          this.cities = this.regions[region];
        })
      )
      .subscribe();
  }
}
