import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { MessageModels } from '../models/messageModels';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModule, NgClass, NgFor],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})

export class Sidebar {
  userInput = '';
  isDarkTheme = false;
  messages: MessageModels[] = [
    { sender: 'ai', text: 'Hi! What can I help you with?' }
  ];

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ sender: 'user', text: this.userInput });
      console.log('User says:', this.userInput);

      setTimeout(() => {
        this.messages.push({ sender: 'ai', text: 'Got it! Let me think...' });
      }, 500);

      this.userInput = '';
    }
  }

  toggleTheme() {
    if (this.isDarkTheme) {
      this.isDarkTheme = false;
    }
    else {
      this.isDarkTheme = true;
    }
  }
}
