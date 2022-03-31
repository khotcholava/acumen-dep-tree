import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() version: string
  @Input() license: string
  constructor() { }

  ngOnInit(): void {
  }

  parseVersion(version: string) {
    if(version.indexOf('-')) {
      return `${version.split('-')[0]} / ${version.split('-')[1]}`
    }
    return  version
  }

}
