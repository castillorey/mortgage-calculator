import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RangeItemComponent } from './range-item/range-item.component';
import { ResultItemComponent } from './result-item/result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeItemComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
