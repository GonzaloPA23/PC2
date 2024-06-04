import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Campania } from '../model/campania';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class CampaniaService {
  private url = `${baseUrl}`
  private listaCambio = new Subject<Campania[]>();
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Campania[]> {
    console.log(this.url + "campanias");
    return this.httpClient.get<Campania[]>(this.url + "/campanias");
  }
  crear(campania: Campania): Observable<Campania> {
    return this.httpClient.post<Campania>(this.url + "/campania", campania);
  }

  setList(listaNueva: Campania[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
