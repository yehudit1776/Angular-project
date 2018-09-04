import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
removeSubject=new Subject();
  getBooks(val:string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${val}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`);
  }
}
