import { Component } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  product1: Product = {
    id : 1,
    name: 'Frank Zappa',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 10,
    promo: .2
  }

  product2: Product = {
    id : 2,
    name: 'Raoul petit',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 12,
    promo: .1
  }

}
