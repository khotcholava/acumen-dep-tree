import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Search} from 'angular-feather/icons'
import { FeatherModule } from 'angular-feather';
const icons = {
  Search
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
