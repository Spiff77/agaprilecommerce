import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { BankAccountPipe } from './pipe/bank-account.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    ProductComponent,
    BankAccountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
