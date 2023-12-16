import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "../list/list/list.component";

@NgModule({
  declarations : [
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ],
  imports:[
    //importamos esto para que nos de error en nuestro *ngIf y demas (esta en el pdf)
    CommonModule
  ]
})
export class HeroesModule{

}
