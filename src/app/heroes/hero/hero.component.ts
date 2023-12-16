import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string = 'Iroman';
  public age  : number=45;


  get capitalize() : string {
    return this.name.toUpperCase();
  }

  getheroDescription() : string{
    //concatenamos las dos variables
      return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='Spiderman';
  }

  changeAge():void{
    this.age=50;
  }

  reset():void{
    this.name = 'iroman';
    this.age = 45;

  }

}
