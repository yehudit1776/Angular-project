import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.css']
})
export class CartPreviewComponent implements OnInit {
@Input()
book:any;
  constructor(private bookservice:BooksService) { }

  ngOnInit() {
  }
  RemoveMe(){
  
this.bookservice.removeSubject.next(this.book);
  }
}
