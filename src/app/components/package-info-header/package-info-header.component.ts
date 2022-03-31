import { Component, Input, OnInit } from '@angular/core';
import { Dependency, PackageInfo, Version } from '../../shared/types';
import { NpmRegistryService } from '../../service/npm-registry.service';

@Component({
  selector: 'app-package-info-header',
  templateUrl: './package-info-header.component.html',
  styleUrls: [ './package-info-header.component.scss' ],
})
export class PackageInfoHeaderComponent implements OnInit {
  @Input() info: PackageInfo | null;
  @Input() dependencies: Dependency[] | null;
  isAppOpen = false;

  constructor(
    public npmRegistryService: NpmRegistryService,
  ) {
  }

  get isInfoEmpty() {
    if (this.info) {
      return this.info && Object.keys(this.info!)?.length > 0;
    }
  }

  get lastVersion(): Version {
    if (this.info) {
      const len = Object.keys(this.info.versions).length;
      return this.info?.versions[Object.keys(this.info?.versions)[len - 1]];
    }
  }

  ngOnInit(): void {
  }

  getDeps(dependencies: Record<string, string>) {
    const keys = dependencies && Object.keys(dependencies);
    return keys.map(item => ({
      name: item,
      version: dependencies[item],
    }));
  }

  expendAll() {
    this.npmRegistryService.allExpanded.next(!this.npmRegistryService.allExpanded.value);
  }
}
