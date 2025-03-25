import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {

  counter = signal(0);

  isZero = computed(() => this.counter() === 0);

  isZeroColor = computed(() => (this.isZero() ? "white" : "red"));

  constructor() {
    effect(() => {
      console.log("valore attuale di counter: ", this.counter());
      localStorage.setItem("counter", JSON.stringify(this.counter()));
    });

    effect(()=> {
      console.log("valore attuale di isZero: ", this.isZero());
    });

  }

  decrement(){
    //this.counter--;
    this.counter.update(currentValue => currentValue - 1);
  }

  increment(){
    //this.counter++;
    this.counter.update(currentValue => currentValue + 1);
  }

  reset(){
    //this.counter = 0;
    this.counter.set(0);
  }
}
