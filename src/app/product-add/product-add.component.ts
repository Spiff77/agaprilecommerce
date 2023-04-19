import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  myFormGroup!: FormGroup

  constructor(private ps: ProductService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myFormGroup = this.fb.group({
      id: '',
      name:'',
      description: '',
      category: '',
      price: '',
      promo: ''
    })
  }

  submit() {
    this.ps.add(this.myFormGroup.value).subscribe(v=> {
      console.log(v)
      this.router.navigateByUrl("/products")
    })
  }
}
