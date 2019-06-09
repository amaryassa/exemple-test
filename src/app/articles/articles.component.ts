import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})


export class ArticlesComponent implements OnInit {



public articles: any = [];
  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this._articleService.getArticles().subscribe(data => {
      this.articles = data;
      // console.log(this.articles);
      });
  }

}
