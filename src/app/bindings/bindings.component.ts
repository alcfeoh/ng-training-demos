import { Component} from '@angular/core';

@Component({
  selector: 'app-bindings',
  standalone: true,
  templateUrl: 'bindings.component.html'
})
export class BindingsComponent {

  name: string = "A Test";

  alertName(): void {
    alert(`${this.name} was clicked`);
  }

}
