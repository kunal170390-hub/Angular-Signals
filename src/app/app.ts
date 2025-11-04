import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterButtons } from './components/counter-buttons/counter-buttons';
import { CounterDisplay } from './components/counter-display/counter-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterDisplay, CounterButtons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-signals-demo');
}
