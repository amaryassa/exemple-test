import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
url_="https://www.surplusmotos.com/images/800x600/ne/119730/1/piece-motos-grosses-cylindrees/moteur_kawasaki_z__300.jpg";
color_="red";
  constructor() { }

  ngOnInit() {
  }

}
