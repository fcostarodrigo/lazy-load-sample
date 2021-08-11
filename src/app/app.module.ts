import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyModule } from './lazy/lazy.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LazyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
