import { Component, ContentChild, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { AutocompleteContentDirective } from '../../directives/autocomplete-content.directive';
import { OptionComponent } from '../option/option.component';
import { merge, switchMap } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  exportAs: 'appAutocomplete',
})
export class AutocompleteComponent {
  @ViewChild('root') rootTemplate: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective)
  content: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  optionsClick(): any {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map((option: any) => option.click$);
        return merge(...clicks$);
      })
    );
  }
}
