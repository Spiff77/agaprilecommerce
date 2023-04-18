import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [{
    id: 1,
    name: 'Frank Zappa',
    category: 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 10,
    promo: .2,
    supplier: {
      id: 1,
      companyName: 'Oloron records',
      bankAccountNumber: '1222344992FD',
      ca: 1000000
    }
  },
    {
      id: 2,
      name: 'Raoul petite',
      category: 'Album',
      active: true,
      description: 'Un cd qu\'il est bien pour l\'écouter',
      price: 12,
      promo: .1
    }];

  findAll(): Product[]{
    return this.products
  }

  constructor() { }
}
