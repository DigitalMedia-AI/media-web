import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';
import { Header } from './header/header';
import { CampaignListComponent } from "./components/campaign-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
}