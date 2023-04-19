import {Component, Input} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-selected-box',
  templateUrl: './selected-box.component.html',
  styleUrls: ['./selected-box.component.css']
})
export class SelectedBoxComponent {

  @Input()
  selectedProduct: Product | undefined;
  showConfirmDelete = false;


  constructor(private ps: ProductService, private ns: NotificationService) {}

  deleteItem() {
    this.ps.delete(this.selectedProduct?.id)
      .subscribe(() => {
        this.selectedProduct = undefined
        this.showConfirmDelete = false;
        this.ns.emitter.next();
      })
  }

}
