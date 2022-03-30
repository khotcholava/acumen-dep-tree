import { Component, Input, OnInit } from '@angular/core';
import { PackageInfo, Version } from '../../shared/types';

@Component({
  selector: 'app-package-info-header',
  templateUrl: './package-info-header.component.html',
  styleUrls: [ './package-info-header.component.scss' ],
})
export class PackageInfoHeaderComponent implements OnInit {
  @Input() info: PackageInfo | null;

  constructor() {
  }

  get isInfoEmpty() {
    // @ts-ignore
    console.log(this.info?.versions[Object.keys(this.info?.versions)[0]])
    return this.info && Object.keys(this.info!)?.length > 0;
  }

  get lastVersion(): Version {
    return this.isInfoEmpty && this.info?.versions[Object.keys(this.info?.versions)[0]]
  }

  ngOnInit(): void {
  }

}
