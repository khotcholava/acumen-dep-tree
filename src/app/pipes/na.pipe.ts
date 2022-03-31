import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
})
export class NaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value || 'N/A';
  }

}
