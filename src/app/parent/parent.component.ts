import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component( {
  selector: 'app-parent',
  templateUrl: './parent.component.html',
} )
export class ParentComponent implements OnInit {

  @ViewChild( ChildComponent ) childComponent: ChildComponent;
  parentMessage: string;

  constructor () { }

  ngOnInit(): void {
  }

  public increase() {
    this.childComponent.increaseByOne();
    this.showMessage();
  }

  public decrease() {
    this.childComponent.descraseByOne();
    this.showMessage();
  }

  showMessage() {
    this.parentMessage = this.childComponent.getCounterMessage();
  }

}
