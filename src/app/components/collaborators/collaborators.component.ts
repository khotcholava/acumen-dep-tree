import { Component, Inject, Input, OnInit } from '@angular/core';
import { Maintainers } from '../../shared/types';
import { GITHUB_USER_URL } from '../../tokens';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: [ './collaborators.component.scss' ],
})
export class CollaboratorsComponent implements OnInit {
  @Input() collaborators: Maintainers[];

  constructor(
    @Inject(GITHUB_USER_URL) public userUrl: string,
  ) {
  }

  ngOnInit(): void {
  }

}
