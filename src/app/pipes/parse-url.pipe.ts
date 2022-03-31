import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseUrl'
})
export class ParseUrlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const split = value.split('+')
    return  split[1]
  }

}
