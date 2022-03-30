import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { NpmRegistryService } from '../service/npm-registry.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private npmRegistryService: NpmRegistryService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.npmRegistryService.showLoading();
    return  next.handle(request).pipe(
      finalize(() => this.npmRegistryService.hideLoading())
    )
  }
}
