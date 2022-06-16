import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameListComponent } from './components/videogame-list/videogame-list.component';
import { VideogameListElementComponent } from './components/videogame-list-element/videogame-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameListComponent,
    VideogameListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
