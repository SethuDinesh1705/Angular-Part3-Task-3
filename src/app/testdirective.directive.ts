import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestdirective]',
})
export class TestdirectiveDirective {
  @HostBinding('style.background-color') bgColor: any;
  @HostBinding('style.color') txtcolor: any;
  @HostListener('mouseover') onHover(): void {
    this.bgColor = 'yellow';
    this.txtcolor = 'green';
  }
  @HostListener('mouseout') onLeave(): void {
    this.bgColor = 'inherit';
    this.txtcolor = 'inherit';
  }
  constructor() {}
}
