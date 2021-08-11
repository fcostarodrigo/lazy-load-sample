import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyConfig } from './lazy.config';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule],
  exports: [LazyComponent],
  providers: [{ provide: LazyConfig, useValue: { message: 'hello' } }],
})
export class LazyModule {}
