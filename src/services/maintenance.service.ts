import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private _url: string = '/assets/data/maintenance.json' ;
  constructor(private http: HttpClient) { }


  getMaitenance(): Observable <any [] > {
    return this.http.get<any[]>(this._url);
  }
}
