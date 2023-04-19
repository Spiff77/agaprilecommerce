import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { BankAccountPipe } from './pipe/bank-account.pipe';
import {HttpClientModule} from '@angular/common/http';
import { SelectedBoxComponent } from './components/selected-box/selected-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    ProductComponent,
    BankAccountPipe,
    SelectedBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
