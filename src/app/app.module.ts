import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './shared/autocomplete/autocomplete.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutocompleteContentDirective } from './directives/autocomplete-content.directive';
import { AutocompleteDirective } from './directives/autocomplete.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from './shared/shared.module';
import { PACKAGE_BASE_URL, SEARCH_BASE_URL } from './tokens';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { PackageInfoHeaderComponent } from './components/package-info-header/package-info-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutocompleteContentDirective,
    AutocompleteDirective,
    PackageInfoHeaderComponent,
    FilterPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    IconsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: SEARCH_BASE_URL,
      useValue: environment.searchBaseUrl,
      multi: true
    },
    {
      provide: PACKAGE_BASE_URL,
      useValue: environment.packageInfoUrl,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }

  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ AutocompleteComponent ],
})
export class AppModule {
}
