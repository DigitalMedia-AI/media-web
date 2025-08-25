import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Header } from './header/header';
import { CampaignListComponent } from "./components/campaign-list/campaign-list.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { NgIf } from '@angular/common';

const hideOnRoutes = ['/', '/home'];

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  showNavbar = false;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !hideOnRoutes.includes(event.url);
      }
    });
  }
}