import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  constructor(private router:Router) { }
@Input() 
book:any
  ngOnInit() {
  }

  seeDetails(){
this.router.navigate(["bookStore/ProductDetails/{{this.book.volumeInfo.title}}"]);
  }
}
