import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandGroup, MainCategory, SubCategory } from '../models';
import { AnnouncementService } from '../announcement.service';
import { Observable, Subject, pipe } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})

export class CreateAnnouncementComponent implements OnInit {
  brandGroups: BrandGroup[] = [
    { name: 'A', brands: ['Audi', 'Abarth'] },
    { name: 'B', brands: ['Bentley', 'BMW'] }
  ]


  public createForm: FormGroup;
  public mainCategories$: Observable<MainCategory[]>;
  public mainCategories: MainCategory[];
  public subCategories: SubCategory[] = [];


  constructor(private formBuilder: FormBuilder, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.initForm();
    this.mainCategories$ = this.announcementService.getCategories().pipe(tap((mainCategories: MainCategory[]) => {
      this.mainCategories = mainCategories
      this.initEvents();
    }));

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
      brand: '',
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