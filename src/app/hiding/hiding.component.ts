import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
    selector: 'app-hiding',
    imports: [
    FormsModule
],
    templateUrl: 'hiding.component.html'
})
export class HidingComponent {

  value: string = "";


}
