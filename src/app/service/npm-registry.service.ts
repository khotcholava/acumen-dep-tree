import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PACKAGE_BASE_URL, SEARCH_BASE_URL } from '../tokens';
import { BehaviorSubject, from, map, mergeMap, Observable, Subject, tap, toArray } from 'rxjs';
import { PackageInfo } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class NpmRegistryService {
  packageInfo$ = new BehaviorSubject<PackageInfo | null>(null);
  loading = new Subject<boolean>();

  showLoading() {
    this.loading.next(true);
  }

  hideLoading() {
    this.loading.next(false);
  }

  getPackageInfo() {
    return this.packageInfo$.asObservable();
  }

  setPackageInfo(info: any) {
    this.packageInfo$.next(info);
  }

  constructor(
    private http: HttpClient,
    @Inject(SEARCH_BASE_URL) private searchUrl: string,
    @Inject(PACKAGE_BASE_URL) private packageInfoUrl: string,
  ) {
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
    console.log(this.loading);
    return this.http.get<PackageInfo>(`${this.packageInfoUrl}/${keyword}`).pipe(
      tap(info => this.setPackageInfo(info)),
    );
  }
}
