import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { MaintenanceProductsComponent } from './maintenance-products/maintenance-products.component';
import { MaintenanceProductComponent } from './maintenance-products/maintenance-product/maintenance-product.component';
import { AproposComponent } from './apropos/apropos.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FeaturedProductComponent } from './featured-products/featured-product/featured-product.component';
import { ReseauSocialComponent } from './reseau-social/reseau-social.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    MaintenanceProductsComponent,
    MaintenanceProductComponent,
    AproposComponent,
    SliderComponent,
    FeaturedProductsComponent,
    FeaturedProductComponent,
    ReseauSocialComponent,
    NewsletterComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    HttpClientModule

  ],
  providers: [ {provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
