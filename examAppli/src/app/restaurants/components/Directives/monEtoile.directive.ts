import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[monEtoileDirective]'
})
export class monEtoileDirective {

  @Input() set monEtoileDirective(value: number) {

    if (value > 2) {
      this.renderer.setStyle(this.el.nativeElement, 'background', 'yellow');
    }
    if (value < 1) {
      this.renderer.setStyle(this.el.nativeElement, 'background', 'grey');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}
