import { Component, OnInit } from '@angular/core';
import { StoreFactory } from '../shared/factories/store-factory';
import { Store } from '../shared/models/store/store.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  store: Store;

  constructor() {
    this.store = StoreFactory.createStore();
  }

  ngOnInit() {
    Object.assign(this.store,
      {
        storeName: "Book Place",
        logoImgURL: "./assets/images/books/home-page/Transparent-Open-Book-PNG.png",
        address: {
          cityName: 'Tel-Aviv',
          streetName: 'HaMasger',
          streetNumber: 35,
          postalCode: '7300',
          email: 'books@bookstore.com',
          name: 'Israel',
          flag: 'https://restcountries.eu/data/isr.svg',
        }
      });
  }
}
