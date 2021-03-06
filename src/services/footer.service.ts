import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private _url: string = '/assets/data/footer.json' ;
  constructor(private http: HttpClient) { }


  getListFooter(): Observable <any [] > {
    return this.http.get<any[]>(this._url);
  }
}
