import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MakeGroup, MainCategory, SubCategory } from '../models';
import { AnnouncementService } from '../announcement.service';
import { Observable, Subject, pipe } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';
import { EngineType, AirConditionType, ConditionType, CoolingType, Currency, EmissionStandartType, EngineCategoryType, GearboxType, HeatingType, MaterialType, ToiletType } from '../enums';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})

export class CreateAnnouncementComponent implements OnInit {
  makeGroups: MakeGroup[] = [
    { name: 'A', makes: ['Audi', 'Abarth'] },
    { name: 'B', makes: ['Bentley', 'BMW'] }
  ]


  public createForm: FormGroup;
  public mainCategories$: Observable<MainCategory[]>;
  public mainCategories: MainCategory[];
  public subCategories: SubCategory[] = [];

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

  constructor(private formBuilder: FormBuilder, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.initForm();
    this.mainCategories$ = this.announcementService.getCategories().pipe(tap((mainCategories: MainCategory[]) => {
      this.mainCategories = mainCategories
      this.initEvents();
    }));
  }

  getEnumValue(name: string, enumeration: object) {
    return enumeration[name];
  }

  public onSelectMainCategory(mainCategoryId: number) {
    let mainCategory = this.mainCategories.find(c => c.id = mainCategoryId);
    if (mainCategory != undefined) {
      this.subCategories = mainCategory.subCategories;
    }
  }

  public submitForm() {
    console.log(this.createForm);
  }

  private initForm() {
    this.createForm = this.formBuilder.group({
      mainCategoryId: 1,
      make: '',
      model: '',
      engineType: '',
      conditionType: '',
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
        tap((mainCategoryId: number) => {
          const mainCategory = this.mainCategories.find(c => c.id == mainCategoryId);
          if (mainCategory != undefined) {
            this.subCategories = mainCategory.subCategories;
          }
        })).subscribe();
  }

}
