import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ListPriceOrRetailPrice, Book, SaleInfo } from '../models/products/book.model';

@Directive({
  selector: '[product-price]'
})
export class ProductPriceDirective implements OnInit {

  @Input() saleInfo: SaleInfo;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    let priceElm = this.renderer2.createElement('SPAN') as HTMLElement;
    priceElm.textContent = this.saleInfo && this.saleInfo.listPrice ? `${this.saleInfo.listPrice.amount} ${this.saleInfo.listPrice.currencyCode}` : '100 ILS';
    this.renderer2.appendChild(this.elementRef.nativeElement, priceElm);
  }
}
