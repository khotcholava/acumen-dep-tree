import { filter, fromEvent, takeUntil } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';

export function overlayClickOutside( overlayRef: OverlayRef, origin: HTMLElement ) {
  return fromEvent<MouseEvent>(document, 'click')
    .pipe(
      filter(event => {
        const clickTarget = event.target as HTMLElement;
        const notOrigin = clickTarget !== origin; // the input
        const notOverlay = !!overlayRef && !overlayRef.overlayElement.contains(clickTarget); // the autocomplete
        return notOrigin && notOverlay;
      }),
      takeUntil(overlayRef.detachments())
    )
}

export function isEmptyObject<Obj extends  {}>(obj: Obj): boolean {
  console.log({ obj });
  return  obj && Object.keys(obj).length > 0
}
