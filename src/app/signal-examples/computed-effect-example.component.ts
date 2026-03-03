import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-computed-effect-example',
  template: `
    <h1>{{message()}}</h1>
    <h1>{{getMessage()}}</h1>
    <button (click)="name.set('WORLD')">
      Change text to WORLD
    </button>
    <br/>
    <button (click)="greeting.set('Bonjour')">
      Change greeting to Bonjour
    </button>
    <button (click)="greeting.set('Welcome')">
      Change greeting to Welcome
    </button>
  `
})
export class ComputedEffectExampleComponent {
  greeting = signal('Hello');
  name = signal('Angular');

  message = computed(() => `${this.greeting()} ${this.name()}!`);

  getMessage() {
    console.log("getMessage() called");
    return "HELLO WORD";
  }

  constructor() {
    effect(() => console.log('Message changed to ' + this.message()));
  }
}
