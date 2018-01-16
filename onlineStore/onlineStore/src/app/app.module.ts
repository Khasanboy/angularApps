import { CategoryService } from './services/category.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { RouterModule, CanActivate } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'login', component:LoginComponent},

      {path:'check-out', component:CheckOutComponent, canActivate:[AuthGuardService]},
      {path:'order-success', component:OrderSuccessComponent, canActivate:[AuthGuardService]},
      {path:'my/orders', component:MyOrdersComponent, canActivate:[AuthGuardService]},
     
      {path:'admin/products', component:AdminProductsComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
      {path:'admin/orders', component:AdminOrdersComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},

      {path:'admin/products/new', component:ProductFormComponent, canActivate:[AuthGuardService, AdminAuthGuardService]}
      
    ])
  ],
  providers: [AuthService, AuthGuardService, UserService, AdminAuthGuardService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
