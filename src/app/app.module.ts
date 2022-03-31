import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './shared/autocomplete/autocomplete.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutocompleteContentDirective } from './directives/autocomplete-content.directive';
import { AutocompleteDirective } from './directives/autocomplete.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from './shared/shared.module';
import { GITHUB_USER_URL, PACKAGE_BASE_URL, SEARCH_BASE_URL } from './tokens';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PackageInfoComponent } from './components/package-info/package-info.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { MarkdownModule } from 'ngx-markdown';
import { ChipComponent } from './components/chip/chip.component';
import { ParseUrlPipe } from './pipes/parse-url.pipe';
import { NaPipe } from './pipes/na.pipe';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { StatsComponent } from './components/stats/stats.component';
import { RepoLinkComponent } from './components/repo-link/repo-link.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeItemComponent } from './components/tree/components/tree-item/tree-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PackageInfoHeaderComponent } from './components/package-info-header/package-info-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutocompleteContentDirective,
    AutocompleteDirective,
    PackageInfoComponent,
    FilterPipe,
    SpinnerComponent,
    SearchContainerComponent,
    ChipComponent,
    ParseUrlPipe,
    NaPipe,
    CollaboratorsComponent,
    StatsComponent,
    RepoLinkComponent,
    TreeComponent,
    TreeItemComponent,
    PackageInfoHeaderComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    IconsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MarkdownModule.forRoot(),
    MatProgressBarModule,
  ],
  providers: [
    {
      provide: SEARCH_BASE_URL,
      useValue: environment.searchBaseUrl,
      multi: true,
    },
    {
      provide: PACKAGE_BASE_URL,
      useValue: environment.packageInfoUrl,
      multi: true,
    },
    {
      provide: GITHUB_USER_URL,
      useValue: environment.githubUserUrl,
      multi: true,
    },
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ AutocompleteComponent ],
})
export class AppModule {
}
