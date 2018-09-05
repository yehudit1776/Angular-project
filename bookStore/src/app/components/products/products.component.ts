import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  books: any[] = [];
  constructor(private booksservice: BooksService) { }

  ngOnInit() {
    
    if (localStorage.getItem('flagSearch') == "true") {
      this.searchBooks(localStorage.getItem('searchValue'));
      localStorage.setItem("flagSearch", "false");
      var input = document.getElementById("searchInput") as HTMLInputElement;
      input.value = localStorage.getItem("searchValue");
    }

  }
  searchBooks(val) {
    this.booksservice.getBooks(val).subscribe(res => { this.books = JSON.parse(JSON.stringify(res["items"])); console.log(this.books) });
    localStorage.setItem("searchValue", val);

  }

}
