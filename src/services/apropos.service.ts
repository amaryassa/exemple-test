import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AproposService {

  private _url: string = '/assets/data/apropos.json' ;
  constructor(private http: HttpClient) { }


  getApropos(): Observable <any [] > {
    return this.http.get<any[]>(this._url);
  }
}
