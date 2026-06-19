import { Component, input, signal, inject } from '@angular/core';
import { GlobalStateService } from '../global-state.service';
import { LocalStateService } from '../local-state.service';

@Component({
  selector: 'app-child-state',
  templateUrl: './child-state.component.html',
  styleUrls: ['./child-state.component.css']
})
export class ChildStateComponent {
  index = input.required<number>();
  
  componentStateCounter = signal(0);

  globalStateService = inject(GlobalStateService);
  localStateService = inject(LocalStateService);

  incrementComponentState() {
    this.componentStateCounter.update(c => c + 1);
  }
}
