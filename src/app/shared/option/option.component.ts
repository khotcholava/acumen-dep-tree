import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent, mapTo, Observable } from 'rxjs';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: [ './option.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent implements OnInit {

  @Input() value: string;
  click$: Observable<string>;

  constructor(private host: ElementRef) {
  }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }

}
