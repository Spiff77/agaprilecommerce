import { Component } from '@angular/core';
import {Product} from '../model/product.model';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product | undefined;

  product1: Product = {
    id : 1,
    name: 'Frank Zappa',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 10,
    promo: .2,
    supplier: {
      id: 1,
      companyName: "Oloron records",
      bankAccountNumber: "1222344992FD",
      ca: 1000000
    }
  }

  product2: Product = {
    id : 2,
    name: 'Raoul petite',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 12,
    promo: .1
  }

  getSelectedProductFromChild(product: Product){
    this.selectedProduct = product
  }

}
