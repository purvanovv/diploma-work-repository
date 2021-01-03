import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@app/@shared';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule, AuthModule, RouterModule, SharedModule],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule { }
