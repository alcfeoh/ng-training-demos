import {Component, input, model, output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  isOpen = model(false);
  title = input("Title");

  onClose = output<string>();

  closePopup(): void {
    this.isOpen.set(false);
    this.onClose.emit('Pop-up window closed');
  }
}
