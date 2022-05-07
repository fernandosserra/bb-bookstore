import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BooksInterface } from '../components/bookstore-app/product-list/models/books-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductListService
{
  private bookUrl = 'http://localhost:3000/books';

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient){}

  getBook(){
    return this.http.get(this.bookUrl);
  }

}
