import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public defaultValue = {
    "title": "titre Site",
   "whishList": 0,
    "shopping": 0
  }

  public header: any = [];
  constructor(private _headerService: HeaderService) { }
  ngOnInit() {
    this._headerService.getHeader().subscribe(data => {
      this.header = data;
      });
  }

}
