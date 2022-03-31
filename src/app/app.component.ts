import { Component, OnInit } from '@angular/core';
import { NpmRegistryService } from './service/npm-registry.service';
import { Observable } from 'rxjs';
import { Dependency, PackageInfo } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  info = this.npmRegistryService.getPackageInfo() as Observable<PackageInfo>;
  deps$: Observable<Dependency[]>;
  loading = this.npmRegistryService.loading;

  constructor(
    private npmRegistryService: NpmRegistryService,
  ) {
  }

  get isInfoEmpty() {
    return this.info && Object.keys(this.info!)?.length > 0;
  }

  ngOnInit() {
  }


}
