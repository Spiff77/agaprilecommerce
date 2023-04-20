import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { BankAccountPipe } from './pipe/bank-account.pipe';
import {HttpClientModule} from '@angular/common/http';
import { SelectedBoxComponent } from './components/selected-box/selected-box.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SupplierAddComponent } from './components/supplier-add/supplier-add.component';

const routes: Routes=[
  {path: "suppliers/add", component: SupplierAddComponent},
  {path: "products/add", component: ProductAddComponent},
  {path: "products/:id", component: ProductDetailComponent},
  {path: "products", component: ProductListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    ProductComponent,
    BankAccountPipe,
    SelectedBoxComponent,
    ProductDetailComponent,
    ProductAddComponent,
    SupplierAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
