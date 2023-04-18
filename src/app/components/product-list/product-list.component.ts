import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductComponent} from '../product/product.component';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product | undefined;
  filterStr = ''
  //nocontent = false;

  products: Product[] = []

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.ps.findAll()
      .subscribe(v => this.products = v)
  }

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
