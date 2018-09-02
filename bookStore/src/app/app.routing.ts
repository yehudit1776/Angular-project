
import { Routes, RouterModule } from '@angular/router';
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


const appRoutes: Routes = [
    { path: 'Books/home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'Books/myAcount', component: MyAcountComponent,children:[
        { path: 'Books/login', component: LoginComponent },
        { path: 'Books/register', component: RegisterComponent },

    ] },
    { path: 'Books/products', component: ProductsComponent },
    { path: 'Books/cart', component: CartComponent },
    { path: 'Books', redirectTo: 'Books/home',},
   

    // otherwise redirect to home
    { path: '**', redirectTo: 'Books' }
];

export const routing = RouterModule.forRoot(appRoutes);