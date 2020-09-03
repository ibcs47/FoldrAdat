import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Varos, Orszag, Kontinens, Kategoria } from './kategoria';
import { VAROS, ORSZAG, KONTINENS} from './mock';

@Injectable({
  providedIn: 'root'
})
export class HelyekService {

   private helyekUrl = 'api/helyek';  // URL to web api

  constructor(private http: HttpClient) { }
  getVarosok(): Observable<Varos[]>{
    return of(VAROS);
  }
  getOrszagok(): Observable<Orszag[]>{
    return of(ORSZAG);
  }
  getKontinensek():Observable<Kontinens[]>{
    return of(KONTINENS);
  }
}
