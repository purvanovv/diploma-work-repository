import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandGroup } from '../models';

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


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }



  public submitForm() {
    console.log(this.createForm);
  }

  private initForm() {
    this.createForm = this.formBuilder.group({
      mainCategoryId: '',
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

}
