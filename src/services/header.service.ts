import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _url: string = '/assets/data/header.json' ;
  constructor(private http: HttpClient) { }


  getHeader(): Observable<any [] > {
    return this.http.get<any[]>(this._url);
  }
}
