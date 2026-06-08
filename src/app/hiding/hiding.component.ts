import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
    selector: 'app-hiding',
    imports: [
    FormsModule
],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: 'hiding.component.html'
})
export class HidingComponent {

  value: string = "";


}
