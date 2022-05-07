import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/elements/header/header.component';
import { FooterComponent } from './shared/components/elements/footer/footer.component';
import { NavComponent } from './shared/components/elements/nav/nav.component';
import { BookstoreAppComponent } from './shared/components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './shared/components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './shared/components/bookstore-app/product-list/product-list.component';
import { ProductItemsComponent } from './shared/components/bookstore-app/product-list/product-items/product-items.component';
import { ProductListService } from './shared/services/product-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
