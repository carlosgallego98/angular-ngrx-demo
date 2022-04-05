import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject, Observable, map, catchError, of, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id?: string | number }> {
  private item$ = new BehaviorSubject<T>({} as T);
  private items$ = new BehaviorSubject<T[]>([])

  private url: string;

  private item!: T;
  private items: T[] = []

  /**
   *
   * @param http HttpClient
   * @param endpoint Endpoint de la API
   * @param rol Role de la API
   */
  constructor(
    public http: HttpClient,
    @Inject("endpoint") private endpoint: string,
    @Inject("rol") private rol: string
  ) {
    this.url = environment.apiUrl + endpoint;
    this.setProfile();
  }

  setProfile() {
    this.url = environment.apiUrl + this.rol + '/' + this.endpoint
  }

  get$(): Observable<T> {
    return this.item$.asObservable();
  }

  getAll$(): Observable<T[]> {
    return this.items$.asObservable();
  }

  getAll(): Observable<T[]> {
    this.items = [];
    return this.http.get<{ data: T[], error: boolean }>(this.url)
      .pipe(
        map((res: { data: T[], error: boolean }) => {
          if (!res.error) {
            this.items.push(...res.data)
          }
          this.items$.next(this.items);
          return res.data;
        })
      );
  }

  get(id: string): Observable<T> {
    return this.http.get<T>(this.url + '/' + id)
      .pipe(
        map((res: any) => {
          if (res.error == false) {
            this.item$.next(this.item);
          }
          return res
        }),
      );
  }

  create(data: T): Observable<T> {
    return this.http.post(this.url, data)
      .pipe(
        map((res: any) => {
          return res;
        }),
      );
  }

  update(data: T): Observable<T> {
    const url = `${this.url}/${data.id}`
    return this.http.put(url, data)
      .pipe(
        map((res: any) => {
          if (res.status == 200) {
            this.item$.next(this.item);
          }
          return res;
        }),
      );
  }

  delete(id: string): Observable<T> {
    const url = `${this.url}/${id}`
    return this.http.delete(url)
      .pipe(
        map((res: any) => {
          if (res.status == 200) {
            this.item$.next(this.item);
          }
          return res;
        }),
      );
  }
}
