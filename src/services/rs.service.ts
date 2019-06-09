import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RsService {

  private _url: string = '/assets/data/rs.json' ;
  constructor(private http: HttpClient) { }


  getImages(): Observable <any [] > {
    return this.http.get<any[]>(this._url);
  }
}
