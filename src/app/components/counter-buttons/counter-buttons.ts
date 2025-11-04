import { Component } from '@angular/core';
import { SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-counter-buttons',
  imports: [],
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons {
  constructor(private signalService: SignalService) {}

  inc() { this.signalService.increment(); }
  dec() { this.signalService.decrement(); }
  reset() { this.signalService.reset(); }
  userUpdate() {this.signalService.updateUser('Alice', 30);}
}

