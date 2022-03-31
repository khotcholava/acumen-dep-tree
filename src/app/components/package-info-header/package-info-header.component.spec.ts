import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageInfoHeaderComponent } from './package-info-header.component';

describe('PackageInfoHeaderComponent', () => {
  let component: PackageInfoHeaderComponent;
  let fixture: ComponentFixture<PackageInfoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageInfoHeaderComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
