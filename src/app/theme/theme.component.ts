import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component( {
  selector: 'app-theme',
  templateUrl: './theme.component.html',
} )
export class ThemeComponent implements AfterViewInit {

  @ViewChild( 'name' ) ename: ElementRef;
  @ViewChild( 'state' ) estate: ElementRef;

  ngAfterViewInit() {
    this.ename.nativeElement.style.backgroundColor = 'pink';
    this.ename.nativeElement.style.color = 'Red';

    this.estate.nativeElement.style.backgroundColor = 'blue';
    this.estate.nativeElement.style.color = 'black';
  }
  constructor () { }

  ngOnInit(): void {
  }

}
