import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDosComponent } from './MyComponents/to-dos/to-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
