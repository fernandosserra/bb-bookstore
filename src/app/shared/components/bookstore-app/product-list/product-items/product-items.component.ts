import { Component, Input, OnInit } from '@angular/core';
import { BookstoreAppComponent } from '../../bookstore-app.component';
import { AuthorsInterface } from '../models/autors-interface';
import { BooksInterface } from '../models/books-interface';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  @Input()
  livro!: BooksInterface;
  autor!: AuthorsInterface;
  
  constructor() { }

  ngOnInit(): void {
  }

}
