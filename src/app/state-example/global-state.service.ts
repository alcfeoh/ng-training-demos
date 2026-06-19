import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  readonly counter = signal(0);

  increment() {
    this.counter.update(c => c + 1);
  }
}
