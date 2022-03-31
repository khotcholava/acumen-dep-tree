import { Component, Inject, Input, OnInit } from '@angular/core';
import { GITHUB_USER_URL } from '../../tokens';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
@Input() label: string
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
