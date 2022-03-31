import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NpmRegistryService } from '../../service/npm-registry.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: [ './search-container.component.scss' ],
})
export class SearchContainerComponent implements OnInit {

  packages$: Observable<any>;
  control = new FormControl('');

  constructor(
    private npmRegistryService: NpmRegistryService,
  ) {
  }

  ngOnInit() {
    this.packages$ = this.control.valueChanges.pipe(
      tap(() => this.npmRegistryService.loading.next(true)),
      switchMap(val => {
        return this.npmRegistryService.searchPackages(val).pipe(
          tap(() => this.npmRegistryService.allExpanded.next(false)),
          tap(() => this.npmRegistryService.loading.next(false)),
        );
      }),
    );
  }

  onOptionClick(val: { id: number, label: string }) {
    this.npmRegistryService.getPackage(val.label).pipe(
      tap(() => this.npmRegistryService.loading.next(false)),
    ).subscribe();

  }

}
