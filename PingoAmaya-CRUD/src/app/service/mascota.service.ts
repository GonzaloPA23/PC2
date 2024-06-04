import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private url = environment.apiUrl;
  private listaCambio = new Subject<Mascota[]>();
  constructor(private http: HttpClient) {}

  list(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.url}/mascotas`);
  }

  listById(id: string): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.url}/mascota/${id}`);
  }

  insert(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(`${this.url}/mascota`, mascota);
  }

  update(mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.url}/mascota`, mascota);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/mascota/${id}`);
  }

  setList(listaNueva: Mascota[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
