import {Component} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product | undefined;
  filterStr = ''
  //nocontent = false;

  products: Product[] = [{
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

  getSelectedProductFromChild(product: Product) {
    this.selectedProduct = product
  }

  setFilter(event: Event) {
    this.filterStr = (event.target as HTMLInputElement).value
  }

  getFilteredProducts(){
    let products = this.products.filter(p => p.name.toLowerCase().includes(this.filterStr.toLowerCase()));
    //this.nocontent = products.length == 0;

    return products
  }
}
