import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  template: `<div *ngFor="let user of users">{{ user.name }}</div>`,
  imports: [CommonModule],
  standalone: true
})

export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(resp => {
        console.log("users >>>>>>> ", resp);
    })
  }
}