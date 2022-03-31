import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NpmRegistryService } from '../../service/npm-registry.service';
import { Dependency } from '../../shared/types';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: [ './tree.component.scss' ],
})
export class TreeComponent implements OnInit {
  @Output() treeItemClick = new EventEmitter<Dependency>();
  @Input() expanded: boolean = false;
  @Input() dependencies: Dependency[] = [];
  loading = this.npmRegistryService.loading;

  trackByFn(index, dep: Dependency) {
    return dep.name;
  }

  constructor(
    private npmRegistryService: NpmRegistryService,
  ) {
  }

  ngOnInit(): void {
  }

  handleTreeItemClick(val: Dependency) {
    this.treeItemClick.emit(val);
  }
}
