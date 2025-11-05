import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://api.example.com'; // 👈 Change to your API base URL

  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(private http: HttpClient) {}

  /** Merge default + custom headers */
  private createHeaders(customHeaders?: HttpHeaders | { [header: string]: string }): HttpHeaders {
    let headers = this.defaultHeaders;

    if (customHeaders) {
      if (customHeaders instanceof HttpHeaders) {
        Object.keys(customHeaders.keys()).forEach(key => {
          headers = headers.set(key, customHeaders.get(key) as string);
        });
      } else {
        Object.entries(customHeaders).forEach(([key, value]) => {
          headers = headers.set(key, value);
        });
      }
    }

    return headers;
  }

  /** Error handling */
  private handleError(error: any): Observable<never> {
    console.error('HTTP Error:', error);
    return throwError(() => new Error(error?.message || 'Server Error'));
  }

  /** Core request builder */
  private request<T>(
    method: string,
    endpoint: string,
    options: {
      body?: any;
      headers?: HttpHeaders | { [header: string]: string };
      params?: HttpParams | { [param: string]: string | number | boolean };
    } = {}
  ): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;

    return this.http
      .request<T>(method, url, {
        ...options,
        headers: this.createHeaders(options.headers),
      })
      .pipe(
        map((res: any) => res),
        catchError(this.handleError)
      );
  }

  // 👉 Public methods for each HTTP verb
  get<T>(endpoint: string, params?: any, headers?: any): Observable<T> {
    return this.request<T>('GET', endpoint, { params, headers });
  }

  post<T>(endpoint: string, body: any, headers?: any): Observable<T> {
    return this.request<T>('POST', endpoint, { body, headers });
  }

  put<T>(endpoint: string, body: any, headers?: any): Observable<T> {
    return this.request<T>('PUT', endpoint, { body, headers });
  }

  patch<T>(endpoint: string, body: any, headers?: any): Observable<T> {
    return this.request<T>('PATCH', endpoint, { body, headers });
  }

  delete<T>(endpoint: string, headers?: any): Observable<T> {
    return this.request<T>('DELETE', endpoint, { headers });
  }
}