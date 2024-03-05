import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: 'model.component.html'
})
export class ModelComponent {

  accepted = false;

  person = {firstName: 'Alain', name: 'Chautard'};

}
