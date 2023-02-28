import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-counter',
  templateUrl: './basic-counter.component.html',
  styleUrls: ['./basic-counter.component.css']
})
export class BasicCounterComponent {

  counter = 0;

  add() {
    this.counter++;
  }

  remove() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

}
