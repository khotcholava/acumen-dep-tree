import { Component, Input, OnInit } from '@angular/core';
import { Maintainers } from '../../shared/types';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
@Input() collaborators: Maintainers[]
  constructor() { }

  ngOnInit(): void {
  }

}
