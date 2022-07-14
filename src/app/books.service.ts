/*
 * Title: book.service.ts
 * Author: David Rachwalik
 * Date: 2022/07/14
 * Description: Book service
 */

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  isbns: Array<string>;

  constructor(private http: HttpClient) {
    this.isbns = [
      '0345339681',
      '0261103571',
      '9780593099322',
      '9780261102361',
      '9780261102378',
      '9780590302715',
      '9780316769532',
      '9780743273565',
      '9780590405959',
    ];
  }

  getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', { params });
  }
}
