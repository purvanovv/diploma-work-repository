import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainCategory, SubCategory, Make } from '../models';
import { AnnouncementService } from '../announcement.service';
import { Observable, Subject, pipe, concat } from 'rxjs';
import { tap, startWith, mergeMap } from 'rxjs/operators';
import { EngineType, AirConditionType, ConditionType, CoolingType, Currency, EmissionStandartType, EngineCategoryType, GearboxType, HeatingType, MaterialType, ToiletType } from '../enums';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})

export class CreateAnnouncementComponent implements OnInit {

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
  public currency = Currency
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

  constructor(private formBuilder: FormBuilder, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.initForm();
    this.$initData().pipe(tap(() => this.initEvents())).subscribe();
  }

  public getEnumValue(name: string, enumeration: object) {
    return enumeration[name];
  }

  public submitForm() {
    console.log(this.createForm.value);
    this.announcementService.createAnnouncement(this.createForm.value).subscribe();
  }

  private $initData(): Observable<any> {
    const $initCategories = this.announcementService.getCategories().pipe(tap((mainCategories: MainCategory[]) => {
      this.mainCategories = mainCategories
    }));

    const $initRegions = this.announcementService.getRegions().pipe(tap((regions: Map<string, string[]>) => {
      this.regions = regions;
    }));

    return concat($initCategories, $initRegions);
  }

  private initForm() {
    this.createForm = this.formBuilder.group({
      mainCategoryId: 1,
      make: '',
      model: '',
      engineType: '',
      conditionType: 'USED',
      horsePower: '',
      emissionStandartType: '',
      gearboxType: '',
      subCategoryId: '',
      coolingType: '',
      numberOfAxels: '',
      numberOfSeats: '',
      weightCapacity: '',
      price: '',
      currency: '',
      dateOfManufacture: '',
      mileage: '',
      color: '',
      region: '',
      city: '',
      validDays: '',
      cubature: '',
      engineCategoryType: '',
      totalWeight: '',
      workingVolume: '',
      hoursOfOperation: '',
      numberOfBeds: '',
      toiletType: '',
      heatingType: '',
      airConditionType: '',
      lengthSize: '',
      materialType: '',
      width: '',
      bicycleSize: '',
      numberOfGears: '',
      description: ''
    });
  }

  private initEvents() {
    this.createForm.get('mainCategoryId').valueChanges
      .pipe(
        startWith(this.createForm.get('mainCategoryId').value),
        mergeMap((mainCategoryId: number) => {
          if (this.mainCategories != undefined) {
            const mainCategory = this.mainCategories.find(c => c.id == mainCategoryId);
            this.subCategories = mainCategory.subCategories;
            return this.announcementService.getMakes(mainCategoryId).pipe(tap(
              (makeGroups: Map<string, Make[]>) => {
                this.makeGroups = makeGroups;
              }
            ))
          }
        }),
      ).subscribe();

    this.createForm.get('make').valueChanges
      .pipe(
        tap((make: string) => {
          const groupName = make.substr(0, 1).toUpperCase();
          const makes: Make[] = this.makeGroups[groupName];
          this.models = makes.find(m => m.make == make)?.models;
        })
      ).subscribe();

    this.createForm.get('region').valueChanges
      .pipe(
        tap((region: string) => {
          this.cities = this.regions[region];
        })
      ).subscribe();

  }

}
