import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService,private router:Router) { }
  bookName: string;
  book: any;
  cartProducts: any[]=[];
  ngOnInit() {
    this.bookName = this.activatedRoute.snapshot.params['book'];
    console.log(this.bookName);
    this.bookService.getBooks(this.bookName).subscribe(res => { this.book = res["items"][0]; console.log(this.book) });
    if(!localStorage.getItem('cartProducts'))
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));

  }
  AddToCart() {
    
    if (localStorage.getItem('cartProducts'))
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

    this.cartProducts.push(this.book);
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
  }

  back(){
    localStorage.setItem("flagSearch","true");
  
    this.router.navigate(["products"]);
  }
}
