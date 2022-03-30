import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { OptionComponent } from './option/option.component';



@NgModule({
  declarations: [
    AutocompleteComponent,
    OptionComponent,
  ],
  exports: [
    AutocompleteComponent,
    OptionComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule { }
