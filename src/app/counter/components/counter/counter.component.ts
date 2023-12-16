import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //al cambiar por las comillas raras (back tips `) nos permite implementear codigo html en el template
  //hasta maximo 4 lineas
  template: `
  <h3>Counter:{{counter}}</h3>

<button (click)="increaseBy(+1)" >+</button>
<button (click)="reset(10)">Reset</button>
<button (click)="increaseBy(-1)">-</button>




  `
})

export class CounterComponent {


  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(value: number): void {
    this.counter = value;
  }

}
