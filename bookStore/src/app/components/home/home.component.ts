import { Component, OnInit } from '@angular/core';
import { Store } from '../../shared/models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
store:Store;
  constructor() {
    this.store=new Store();
    this.store.name="BooksShop";
    this.store.img="";
    this.store.city="BB";
    this.store.street="Rabbi Akiva";
    this.store.numHouse=60;
   }

  ngOnInit() {
  }

}
