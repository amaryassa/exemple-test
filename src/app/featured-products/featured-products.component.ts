import { FeaturedService } from './../../services/featured.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  public featured_products: any = [];
  constructor(private _featuredService: FeaturedService) { }
  ngOnInit() {
    this._featuredService.getProducts().subscribe(data => {
      // console.log('featured_products', data);
      this.featured_products = data;
      });
  }

}
