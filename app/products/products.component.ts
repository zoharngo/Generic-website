import { Component, OnInit } from '@angular/core';
import { Book, Weather } from '../shared/models/products/book.model';
import { BooksService } from '../shared/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = "Products Page";
  products: Array<Book>;

  constructor(private booksSrv: BooksService, private router: Router) { }

  ngOnInit() {
    this.booksSrv.getBookList().subscribe((res) => {
      this.products = res.items;
      console.log('stop');
    });
  }

  fillterBooks(textForSearch: string): void {
    this.booksSrv.queryBooks(textForSearch).subscribe((res => this.products = res.items));
  }
  
  showDetails(id: string) {
    this.router.navigate([`/products/${id}`]);
  }
}
