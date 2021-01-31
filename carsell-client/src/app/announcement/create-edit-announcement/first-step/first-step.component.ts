import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Make,
   MainCategory,
    SubCategory, 
    CategoryPair,
     AnnouncementPreview,
      AnnouncementCreateModel,
       AnnouncementCreate } from '@app/announcement/models';
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
import { tap, mergeMap, take, finalize, startWith } from 'rxjs/operators';
import { Observable, concat, Subscription } from 'rxjs';
import { AnnouncementFormBuilder } from '@app/announcement/announcement.form.builder';
import { untilDestroyed } from '@app/@core';
import { AnnouncementStoreService } from '@app/announcement/announcement-store.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementModelConverter } from '@app/announcement/utils';
import { DomSanitizer } from '@angular/platform-browser';
import { CredentialsService } from '@app/auth';
import { NotificationService } from '@app/@shared';

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
  public isLoading = false;
  public isCreateMode = false;
  public initFormCategory: MainCategory = { id: 1, name: 'Автомобили и Джипове', value: 'CARS_AND_JEEPS' };
  private eventSubscriptions: Subscription[] = [];
  private modelConverter: AnnouncementModelConverter;
  private announcementId: number | undefined = undefined;
  private announcementForEdit: AnnouncementCreate | undefined = undefined;

  constructor(private formBuilder: FormBuilder,
    private announcementService: AnnouncementService,
    private announcementStoreService: AnnouncementStoreService,
    private route: ActivatedRoute,
    private credentialsService: CredentialsService,
    sanitizer: DomSanitizer,
    private notificationService: NotificationService) {
    this.modelConverter = new AnnouncementModelConverter(sanitizer);
  }
  ngOnDestroy(): void {
    this.clearEventSubsriptions();
  }

  ngOnInit(): void {
    this.checkForEditMode();
    this.init().subscribe();
  }

  init() {
    this.isLoading = true;
    return this.$initData().pipe(finalize(() => {
      if (this.isCreateMode) {
        this.initForm();
      } else {
        this.initFormForEdit(this.announcementForEdit)
      }
      this.initEvents()
      this.isLoading = false;
    }));
  }


  public getEnumValue(name: string, enumeration: object) {
    return enumeration[name];
  }

  public submitForm() {
    let observer: Observable<number>;
    if (this.isCreateMode) {
      observer = this.announcementService
        .createAnnouncement(this.createForm.value);
    } else {
      observer = this.announcementService
        .editAnnouncement(this.createForm.value);
    }
    observer
      .pipe(untilDestroyed(this))
      .subscribe(
        (announcementId: number) => {
          this.announcementStoreService.setAnnouncementId(announcementId);
          this.announcementStoreService.changeStep(1);
          this.announcementStoreService.initDataSecondStep();
          this.notificationService.success('Обявата беше запазена успешно');
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

  private $onChangeMainCategory(mainCategoryId: number) {
    const categoryPair = this.categories.find((c) => c.mainCategory.id === mainCategoryId);
    this.subCategories = categoryPair.subCategories;
    this.initFormCategory = {
      id: categoryPair.mainCategory.id,
      name: categoryPair.mainCategory.name,
      value: categoryPair.mainCategory.value,
    };
  }

  private $initRegions() {
    return this.announcementService.getRegions().pipe(
      take(1),
      tap((regions: Map<string, string[]>) => {
        this.regions = regions;
      })
    );
  }

  private $initCategories(mainCategoryId: number) {
    return this.announcementService.getCategories().pipe(
      take(1),
      tap((categories: CategoryPair[]) => {
        this.categories = categories;
        const categoryPair = this.categories.find((c) => c.mainCategory.id === mainCategoryId);
        this.subCategories = categoryPair.subCategories;
      })
    );
  }

  private $initMakes(mainCategoryId: number): Observable<Map<string, Make[]>> {
    return this.announcementService.getMakes(mainCategoryId).pipe(
      tap((makeGroups: Map<string, Make[]>) => {
        this.makeGroups = makeGroups;
      })
    );
  }

  private checkForEditMode() {
    const announcementId = this.route.snapshot.paramMap.get('id');
    this.isCreateMode = !announcementId;
    this.announcementId = Number(announcementId);
  }

  private $initData(): Observable<any> {
    if (!this.isCreateMode) {
      const $initForm = this.announcementService.getAnnouncementPreview(this.announcementId)
        .pipe(
          take(1),
          tap((announcement: AnnouncementPreview) => {
            const announcementCreate = this.modelConverter.convertAnnouncementPreviewToAnnouncementCreate(announcement);
            this.announcementForEdit = announcementCreate;
            this.initFormCategory = announcement.mainCategory;
          }));
      return $initForm.pipe(mergeMap(() => {
        const observables = [];
        observables.push(this.$initCategories(this.initFormCategory.id));
        observables.push(this.$initMakes(this.initFormCategory.id));
        observables.push(this.$initRegions());
        return concat(...observables);
      }))
    } else {
      const observables = [];
      observables.push(this.$initCategories(this.initFormCategory.id));
      observables.push(this.$initMakes(this.initFormCategory.id));
      observables.push(this.$initRegions());
      return concat(...observables);
    }





  }
  private initFormForEdit(announcementCreate: AnnouncementCreateModel) {
    this.createForm = new AnnouncementFormBuilder(
      this.formBuilder,
      MainCategoryType[this.initFormCategory.value]
    ).withAnnouncement(announcementCreate)
      .build();
  }

  private initForm() {
    this.createForm = new AnnouncementFormBuilder(
      this.formBuilder,
      MainCategoryType[this.initFormCategory.value]
    ).build();
    this.createForm.get('mainCategoryId').setValue(this.initFormCategory.id);
    this.createForm.get('conditionType').setValue('USED');
    this.createForm.get('userId').setValue(this.credentialsService.credentials.userId);

  }

  private initEvents() {
    this.clearEventSubsriptions();
    if (this.isCreateMode) {
      const mainCategorySubsrc$ = this.createForm
        .get('mainCategoryId')
        .valueChanges.pipe(
          mergeMap((mainCategoryId) => {
            if (this.categories !== undefined) {
              this.$onChangeMainCategory(mainCategoryId);
              return this.init();
            }
          })
        )
        .subscribe();
      // this.eventSubscriptions.push(mainCategorySubsrc$);
    }


    const makeSubscr$ = this.createForm
      .get('make')
      .valueChanges.pipe(
        startWith(this.createForm.get('make').value),
        tap((make: string) => {
          if (make.trim() !== '') {
            const groupName = make.substr(0, 1).toUpperCase();
            const makes: Make[] = this.makeGroups[groupName];
            this.models = makes.find((m) => m.make === make)?.models;
          }
        })
      )
      .subscribe();
    this.eventSubscriptions.push(makeSubscr$);

    const regionSubscr$ = this.createForm
      .get('region')
      .valueChanges.pipe(
        startWith(this.createForm.get('region').value),
        tap((region: string) => {
          if (region.trim() !== '') {
            this.cities = this.regions[region];
          }
        })
      )
      .subscribe();
    this.eventSubscriptions.push(regionSubscr$);
  }
}
