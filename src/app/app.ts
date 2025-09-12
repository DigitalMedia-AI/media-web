import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Header } from './header/header';
import { CampaignListComponent } from "./components/campaign-list/campaign-list.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { NgIf } from '@angular/common';
import { Sidebar } from "./sidebar/sidebar";
import { NgClass } from '@angular/common';

const hideOnRoutes = ['/', '/home'];

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Sidebar, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  showNavbar = true;
  showSidebar = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !hideOnRoutes.includes(event.url);
        this.showSidebar = !hideOnRoutes.includes(event.url);
      }
    });
  }
}