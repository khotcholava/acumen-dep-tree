import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLinkComponent } from './repo-link.component';

describe('RepoLinkComponent', () => {
  let component: RepoLinkComponent;
  let fixture: ComponentFixture<RepoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
