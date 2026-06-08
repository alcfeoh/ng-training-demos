import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bindings',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: 'bindings.component.html'
})
export class BindingsComponent {

  name: string = "A Test";

  alertName(): void {
    alert(`${this.name} was clicked`);
  }

}
