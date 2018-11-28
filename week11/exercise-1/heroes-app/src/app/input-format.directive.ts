import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[customInputFormat]'
})
export class InputFormatDirective {
  private element: ElementRef;
  constructor(elr: ElementRef) {
    this.element = elr;
  }

  @HostListener('blur') OnBlur(elr: ElementRef) {
    this.element.nativeElement.value = this.element.nativeElement.value.toUpperCase();
  }
}
