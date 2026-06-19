import { Injectable, signal } from '@angular/core';

@Injectable()
export class LocalStateService {
  readonly counter = signal(0);

  increment() {
    this.counter.update(c => c + 1);
  }
}
