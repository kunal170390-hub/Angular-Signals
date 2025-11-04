import { Component } from '@angular/core';
import { SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {
  constructor(public signalService: SignalService) {}
}
