import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {}
