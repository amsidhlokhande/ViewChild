import { Component, OnInit, HostListener } from '@angular/core';

@Component( {
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ]
} )
export class ChildComponent implements OnInit {
  counter: number = 0;
  message: string;
  constructor () { }

  ngOnInit(): void {
  }

  public increaseByOne() {
    this.counter = this.counter + 1;
    this.message = 'Counter Value :' + this.counter;
  }

  public descraseByOne() {
    this.counter = this.counter - 1;
    this.message = 'Counter Value :' + this.counter;
  }

  public getCounterMessage(): string {
    return 'Counter Value :' + this.counter;
  }

  @HostListener( 'click' ) clicked() {
    alert( 'Clicked' )
  }
  @HostListener( 'mouseover' ) mouseover() {
    console.log( 'Mouse Over ' );
  }

  @HostListener( 'mouseout' ) mouseout() {
    console.log( 'Mouse out ' );
  }

}
