import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//nuevo importado
import { counterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';


//import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './list/list/list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent,
  ],
  imports: [
    BrowserModule,
    //nuevo - todos los modulos se van en el import
    counterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
