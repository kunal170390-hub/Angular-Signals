import { Injectable, signal, computed } from '@angular/core';

interface UserModal {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class SignalService  {
  // Reactive state using signal
  user = signal<UserModal>({ name: '', age: 0 });
  counter = signal<number>(0);

  // Computed signal (derived state)
  doubleCounter = computed(() => this.counter() * 2);

  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

  reset() {
    this.counter.set(0);
  }

  updateUser(name: string, age: number) {
    this.user.set({ name, age });
  }
  
}