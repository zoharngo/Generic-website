import { Component, OnInit, Input } from '@angular/core';
import { VolumeInfo, Book } from '../shared/models/products/book.model';


@Component({
  selector: 'product-preview',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class productComponent implements OnInit {

  @Input() productPreview: Book;

  constructor() { }

  ngOnInit() {
    console.log(this.productPreview);
  }

}
