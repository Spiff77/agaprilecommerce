import { Component } from '@angular/core';
import {Supplier} from '../../model/supplier.model';
import {NgForm} from '@angular/forms';
import {SupplierService} from '../../service/supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent {
  supplier: Supplier = {
    id:0,
    companyName:'',
    ca:0,
    bankAccountNumber:'',
  }
  submitted = false

  constructor(private supplierService: SupplierService) {
  }

  submit(myForm: NgForm) {
    this.submitted = true;
    if(myForm.valid){
      this.supplierService.add(this.supplier).subscribe()
    }
  }
}
