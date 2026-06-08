import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab1',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<p>Content for Tab 1</p>',
})
export class Tab1Component {}
