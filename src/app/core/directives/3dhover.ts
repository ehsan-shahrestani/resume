import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private get height(): number {
    return this.el.nativeElement.clientHeight;
  }

  private get width(): number {
    return this.el.nativeElement.clientWidth;
  }

  @HostListener('mousemove', ['$event'])
  handleMove(event: MouseEvent) {
    const xVal = event.layerX;
    const yVal = event.layerY;

    const yRotation = 20 * ((xVal - this.width / 2) / this.width);
    const xRotation = -20 * ((yVal - this.height / 2) / this.height);

    const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    this.renderer.setStyle(this.el.nativeElement, 'transform', transformString);
  }

  @HostListener('mouseout')
  handleMouseOut() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    );
  }

  @HostListener('mousedown')
  handleMouseDown() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    );
  }

  @HostListener('mouseup')
  handleMouseUp() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    );
  }
}
