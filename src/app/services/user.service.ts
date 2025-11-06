import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { HttpService } from '../wrapper/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users'; // This will be intercepted

  constructor(private http: HttpService) { }

  private mockUsers: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  getUsers(): Observable<User[]> {
    //return this.http.get<User[]>(this.apiUrl);
    // mock data with simulated latency
    return of(this.mockUsers).pipe(delay(500));
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}