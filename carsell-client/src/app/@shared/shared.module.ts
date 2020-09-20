import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { EnumToArrayPipe } from './enum-to-array.pipe';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [LoaderComponent, EnumToArrayPipe],
  exports: [LoaderComponent, EnumToArrayPipe],
})
export class SharedModule {}
