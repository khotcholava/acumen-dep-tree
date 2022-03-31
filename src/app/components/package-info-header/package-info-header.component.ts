import { Component, Input, OnInit } from '@angular/core';
import { PackageInfo, Version } from '../../shared/types';

@Component({
  selector: 'app-package-info-header',
  templateUrl: './package-info-header.component.html',
  styleUrls: ['./package-info-header.component.scss']
})
export class PackageInfoHeaderComponent implements OnInit {
@Input() lastVersion: Version;
@Input() info: PackageInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
