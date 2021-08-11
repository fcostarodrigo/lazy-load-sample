import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyConfig } from './lazy/lazy.config';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: LazyConfig, useValue: { message: 'hello' } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
