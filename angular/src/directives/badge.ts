import { Directive, ElementRef, Input } from '@angular/core';


function proxyWC(instance: any, elm: any, props: string[]) {
  props.forEach(propName => {
    Object.defineProperty(instance, propName, {
      get: () => elm[propName],
      set: (val: string) => elm[propName] = val
    });
  });
}


@Directive({ selector: 'ion-badge' })
export class Badge {

  @Input() color: string;

  constructor(e: ElementRef) { proxyWC(this, e.nativeElement, ['color']); }

}
