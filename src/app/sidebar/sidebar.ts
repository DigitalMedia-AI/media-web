import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material-module';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar{
  userInput = '';

  sendMessage() {
    console.log('User says:', this.userInput);
    this.userInput = '';
  }
}
