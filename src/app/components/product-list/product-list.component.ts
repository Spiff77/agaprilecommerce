import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductComponent} from '../product/product.component';
import {ProductService} from '../../service/product.service';
import {delay} from 'rxjs';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  filterStr = ''
  products: Product[] = []
  selectedProduct: Product | undefined;

  constructor(private ps: ProductService, private ns: NotificationService) {}

  ngOnInit(): void {
    this.initList()
    this.ns.emitter.subscribe(  () =>
      this.initList())
  }

  private initList() {
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
