import { Component, input, signal, inject } from '@angular/core';
import { ChildStateComponent } from '../child-state/child-state.component';
import { LocalStateService } from '../local-state.service';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-parent-state',
  imports: [ChildStateComponent],
  providers: [LocalStateService],
  templateUrl: './parent-state.component.html',
  styleUrls: ['./parent-state.component.css']
})
export class ParentStateComponent {
  index = input.required<number>();
  children = signal([1]);

  componentStateCounter = signal(0);
  globalStateService = inject(GlobalStateService);
  localStateService = inject(LocalStateService);

  addChild() {
    this.children.update(c => [...c, c.length + 1]);
  }

  incrementComponentState() {
    this.componentStateCounter.update(c => c + 1);
  }
}
