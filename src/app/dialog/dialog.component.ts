import {Component, input, model, output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
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
