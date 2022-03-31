import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PACKAGE_BASE_URL, SEARCH_BASE_URL } from '../tokens';
import { BehaviorSubject, from, map, mergeMap, Observable, tap, toArray } from 'rxjs';
import { Dependency, PackageInfo } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class NpmRegistryService {
  packageInfo$ = new BehaviorSubject<PackageInfo | null>(null);
  dependencies$ = new BehaviorSubject<Dependency[] | null>(null);
  allExpanded = new BehaviorSubject(false);
  loading = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    @Inject(SEARCH_BASE_URL) private searchUrl: string,
    @Inject(PACKAGE_BASE_URL) private packageInfoUrl: string,
  ) {
  }

  getDependencies() {
    return this.dependencies$.asObservable();
  }

  setDependencies(deps) {
    this.dependencies$.next(deps);
  }

  getPackageInfo() {
    return this.packageInfo$.asObservable();
  }

  setPackageInfo(info: any) {
    this.packageInfo$.next(info);
  }

  searchPackages(keyword: string) {
    return this.http.get(`${this.searchUrl}`, {
      params: {
        text: keyword,
      },
    }).pipe(
      mergeMap((packages: any) => from(packages.objects)),
      map((item: any) => item.package.name as string[]),
      map((item, index) => ({
        id: index,
        label: item,
      })),
      toArray(),
    );
  }

  getPackage(keyword: string): Observable<PackageInfo> {
    return this.http.get<PackageInfo>(`${this.packageInfoUrl}/${keyword}`).pipe(
      tap(info => this.setPackageInfo(info)),
    );
  }

  getPackageDependencies(keyword: string): Observable<Array<Dependency>> {
    return this.http.get<Array<Dependency>>(`${this.packageInfoUrl}/${keyword}/latest`).pipe(
      mergeMap((packages: any) => {
        const keys = Object.keys(packages.dependencies as Array<Dependency> || {});
        const deps = keys.map(item => ({
          name: item,
          version: packages.dependencies[item],
        }));
        return from(deps);
      }),
      toArray(),
      tap(deps => this.setDependencies(deps)),
    );
  }
}
