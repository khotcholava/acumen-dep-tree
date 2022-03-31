import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronDown, ChevronRight, Github, Link, Maximize2, Minimize2, Search } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

const icons = {
  Search,
  Github,
  Link,
  ChevronDown,
  ChevronRight,
  Minimize2,
  Maximize2,
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule,
  ],
})
export class IconsModule {
}
