import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
url_="https://www.surplusmotos.com/images/800x600/ne/119730/1/piece-motos-grosses-cylindrees/moteur_kawasaki_z__300.jpg";
url_1="https://www.velobrival.com/wp-content/uploads/2017/09/AUDACIO-200-CP-FLAT-Lapierre-8450-2000x1252.jpg";
url_2="https://i2.cdscdn.com/pdt2/8/5/4/1/700x700/hom2009739681854/rw/26-vtt-puissance-electrique-pliable-vitesse-velo.jpg";
url_3="https://medias.ultimebike.com/cache/ultimebike/rhs2/800/800/6/e/0/6e04a1fd13f1f7720b1b99c7231de04f/manette-de-vitesses-shimano-ty22-7v.jpg";
url_4="https://media.intersport.fr/is/image/intersportfr/5007090BZG_Q1?$produit_l$";
color_="red";
  constructor() { }

  ngOnInit() {
  }

}
