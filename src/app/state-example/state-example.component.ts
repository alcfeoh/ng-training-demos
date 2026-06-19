import { Component, signal } from '@angular/core';
import { ParentStateComponent } from './parent-state/parent-state.component';

@Component({
  selector: 'app-state-example',
  imports: [ParentStateComponent],
  templateUrl: './state-example.component.html'
})
export class StateExampleComponent {
  parents = signal([1]);

  addParent() {
    this.parents.update(p => [...p, p.length + 1]);
  }
  
  removeParents() {
    this.parents.set([]);
  }
}
