import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('frontend');
}