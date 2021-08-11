import { Injectable } from '@angular/core';
import { LazyConfig } from './lazy.config';

@Injectable({
  providedIn: 'any',
})
export class LazyService {
  public constructor(private config: LazyConfig) {}

  public getMessage(): string {
    return this.config.message;
  }
}
