import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive( {
  selector: '[appChangecolor]'
} )
export class ChangecolorDirective implements AfterViewInit {

  constructor ( private elementRef: ElementRef ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.color = 'Red';
  }

  changeColor( color: string ) {
    this.elementRef.nativeElement.style.color = color;
  }
}
