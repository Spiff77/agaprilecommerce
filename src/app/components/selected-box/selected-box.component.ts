import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-selected-box',
  templateUrl: './selected-box.component.html',
  styleUrls: ['./selected-box.component.css']
})
export class SelectedBoxComponent implements OnChanges{

  @Input()
  selectedProduct: Product | undefined;
  showConfirmDelete = false;

  @Output()
  onCloseBox = new EventEmitter<void>()

  constructor(private ps: ProductService, private ns: NotificationService) {}

  deleteItem() {
    this.ps.delete(this.selectedProduct?.id)
      .subscribe(() => {
        this.selectedProduct = undefined
        this.showConfirmDelete = false
        this.ns.emitter.next()
      })
  }

  closeBox(){
    this.onCloseBox.emit()
    this.selectedProduct = undefined
    this.showConfirmDelete = false
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showConfirmDelete = false
  }

}

