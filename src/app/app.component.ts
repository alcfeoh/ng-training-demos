import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-training-demos';
}
