import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url = '/assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getById(id: string): Observable<any | null> {
    return this.getAll().pipe(
      map((list: any[]) => list.find((p: any) => p.id === id) || null)
    );
  }
}
