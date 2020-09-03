import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here - Lehet, hogy nem kell majd
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KatvalComponent } from './katval/katval.component';
import { MessagesComponent } from './messages/messages.component';
import { DisplayComponent } from './display/display.component';
import { ListaComponent } from './lista/lista.component';
import { GridComponent } from './grid/grid.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    KatvalComponent,
    MessagesComponent,
    DisplayComponent,
    ListaComponent,
    GridComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,       //Lehet, hogy nem kell majd
    //TODO: Kiszedni, ha nem kell↑
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
