import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {
  private _url: string = '/assets/data/featured.json' ;
  constructor(private http: HttpClient) { }


  getProducts(): Observable <any [] > {
    return this.http.get<any[]>(this._url);
  }
}
