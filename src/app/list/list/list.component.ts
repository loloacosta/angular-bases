import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    public heroNames:string[]=['Spiderman','Iroman','Hulk','She Hulk','Thor','Power Rangers'];
    public deleteHero?:string='';

    removeLastHero():void{
      //shift remueve el primero
      //remueve el ultimo elemento del array
       this.deleteHero = this.heroNames.pop();

    }
}
