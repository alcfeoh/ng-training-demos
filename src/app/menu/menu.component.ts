import { Component, OnInit } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true,
  imports: [
    DialogComponent, RouterLink
  ],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showDialog = false;

  constructor() {}

  ngOnInit(): void {}

  dialogClosed(event: string): void {
    console.log(event);
    this.showDialog = false;
  }
}
