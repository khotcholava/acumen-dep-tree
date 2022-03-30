import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { NpmRegistryService } from '../../service/npm-registry.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  packages$: Observable<any>
  control = new FormControl('');

  constructor(
    private npmRegistryService: NpmRegistryService
  ) {
  }

  ngOnInit() {
    this.packages$ = this.control.valueChanges.pipe(
      switchMap(val => {
        return this.npmRegistryService.searchPackages(val).pipe(
          tap(console.log)
        )
      }),
    )
  }

  onOptionClick(val: {id: number, label: string}) {
    this.npmRegistryService.getPackage(val.label).subscribe(data => {
      console.log(data);
    })
  }

}
