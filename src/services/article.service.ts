import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private _url: string = '/assets/data/articles.json' ;
  constructor(private http: HttpClient) { }


  getArticles(): Observable <any [] > {
    return this.http.get<any[]>(this._url);
  }
}
