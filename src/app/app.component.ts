import { Component, OnInit } from '@angular/core';
import { NpmRegistryService } from './service/npm-registry.service';
import { Observable } from 'rxjs';
import { PackageInfo } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  info = this.npmRegistryService.getPackageInfo() as Observable<PackageInfo>;
  loading = this.npmRegistryService.loading;
  get isInfoEmpty() {
    return this.info && Object.keys(this.info!)?.length > 0;
  }
  constructor(
    private npmRegistryService: NpmRegistryService,
  ) {
  }

  ngOnInit() {
  }

}
