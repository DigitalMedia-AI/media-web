import { Component, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { MaterialModule } from "../material/material-module";

@Component({
  selector: 'app-header',
  imports: [MatIcon, RouterLink, MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {
   @Output() toggleSidebar = new EventEmitter<void>();

  onMenuClick() {
    console.log("Toggling Sidebar")
    this.toggleSidebar.emit();
  }
}
