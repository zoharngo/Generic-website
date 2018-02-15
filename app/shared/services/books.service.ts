import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Weather } from '../models/products/book.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Weather> {
    return this.httpClient.get<Weather>('https://www.googleapis.com/books/v1/volumes?q=a');
  }

  getBookByID(id: string): Observable<Book> {
    return id ? this.httpClient.get<Book>(`https://www.googleapis.com/books/v1/volumes/${id}`) : null;
  }

  queryBooks(text: string = 'a'): Observable<Weather> {
    return this.httpClient.get<Weather>(`https://www.googleapis.com/books/v1/volumes?q=${text}`);
  }

}
