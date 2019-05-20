import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { MaintenanceProductsComponent } from './maintenance-products/maintenance-products.component';
import { MaintenanceProductComponent } from './maintenance-products/maintenance-product/maintenance-product.component';
import { AproposComponent } from './apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArticlesComponent,
    MaintenanceProductsComponent,
    MaintenanceProductComponent,
    AproposComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
