import { Component,OnInit  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ArticleServiceService} from './article-service.service';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  articles : Article[];
  constructor(
    private http: HttpClient,
    private articleService: ArticleServiceService
   ) { }

  title = 'app';

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
    console.log(this.articles)
  }
}
