import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../wrapper/http.service';

@Component({
  selector: 'app-user-list',
  template: `<div *ngFor="let user of users">{{ user.name }}</div>`,
  imports: [CommonModule],
  standalone: true
})

export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.get<any[]>('/users').subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error fetching users', err),
    });
  }
}