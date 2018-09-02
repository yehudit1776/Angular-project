import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { MyAcountComponent } from './components/my-acount/my-acount.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { routing }        from './app.routing';

import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { UserService } from './shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    MyAcountComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductPreviewComponent,
    ProductDetailsComponent,
    CartComponent,
    CartPreviewComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
