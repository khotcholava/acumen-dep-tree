import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NpmRegistryService } from '../../../../service/npm-registry.service';
import { Observable, tap } from 'rxjs';
import { Dependency } from '../../../../shared/types';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: [ './tree-item.component.scss' ],
})
export class TreeItemComponent implements OnInit {
  @Input() version = '';
  hasChildren = true;
  insideDeps$: Observable<Dependency[]>;
  expanded = false;

  constructor(
    public npmRegistryService: NpmRegistryService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  private _name = '';

  get name() {
    return this._name;
  }

  @Input()
  set name(value: string) {
    this._name = value;
    this.insideDeps$ = this.npmRegistryService.getPackageDependencies(this._name).pipe(
      tap(val => this.hasChildren = !!val.length),
    );
  }

  ngOnInit(): void {
    this.npmRegistryService.allExpanded.subscribe(res => {
      this.expanded = res;
    });
  }

  handleTreeItemClick() {
    this.expanded = !this.expanded;
    this.cdr.detectChanges();
  }
}
