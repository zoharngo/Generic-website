import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Book, VolumeInfo } from '../shared/models/products/book.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  title = "Product Details";
  productDetails: VolumeInfo;

  constructor(private bookService: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookService.getBookByID(params.id).subscribe((res => {
        this.productDetails = res.volumeInfo;
      }));
    });
  }

}
