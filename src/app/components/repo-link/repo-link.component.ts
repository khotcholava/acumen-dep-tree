import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-link',
  templateUrl: './repo-link.component.html',
  styleUrls: [ './repo-link.component.scss' ],
})
export class RepoLinkComponent implements OnInit {
  @Input() url: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
