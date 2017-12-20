import { CapitalizeFirstPipe } from './capitalize-first.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent } from './components/star/star.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { Pipe } from '@angular/core/src/metadata/directives';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    TitlePageComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
