import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  private users: User[] = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
  ];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/api/users') && request.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: this.users }));
    }

    if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
      const id = parseInt(request.url.split('/').pop() || '0');
      const user = this.users.find(u => u.id === id);
      if (user) {
        return of(new HttpResponse({ status: 200, body: user }));
      } else {
        return of(new HttpResponse({ status: 404, body: { message: 'User not found' } }));
      }
    }

    return next.handle(request);
  }
}