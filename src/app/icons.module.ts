import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search, Github,Minimize2, Maximize2, Link , ChevronDown, ChevronRight} from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

const icons = {
  Search,
  Github,
  Link,
  ChevronDown,
  ChevronRight,
  Minimize2,
  Maximize2
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
