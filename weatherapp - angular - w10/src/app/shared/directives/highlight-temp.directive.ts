import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightTemp]'
})
export class HighlightTempDirective implements OnChanges {
  @Input() appHighlightTemp!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    const temp = this.appHighlightTemp;

    if (temp >= 30) {
      this.setColor('red');
    } else if (temp <= 15) {
      this.setColor('blue');
    } else {
      this.setColor('black');
    }
  }

  private setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }
}
