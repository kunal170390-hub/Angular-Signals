import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterButtons } from './components/counter-buttons/counter-buttons';
import { CounterDisplay } from './components/counter-display/counter-display';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterDisplay, CounterButtons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
   users: User[] = [];
  protected readonly title = signal('angular-signals-demo');

  //constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(users => {
    //   this.users = users;
    // });
  }
}
