import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DropdownModule} from './dropdown/dropdown.module';
import {MoviedbService} from './moviedb.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DropdownModule
  ],
  providers: [
    MoviedbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
