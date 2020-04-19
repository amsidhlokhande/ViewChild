import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component( {
  selector: 'app-color',
  templateUrl: './color.component.html',
} )
export class ColorComponent implements OnInit {

  @ViewChild( ChangecolorDirective ) changecolorDirective: ChangecolorDirective;

  changeColor( color: string ) {
    this.changecolorDirective.changeColor( color );
  }


  constructor () { }

  ngOnInit(): void {
  }



}
