import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  myFormGroup!: FormGroup

  constructor(private ps: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.myFormGroup = new FormGroup<any>({
      id: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      promo: new FormControl('')
    })
  }

  submit() {
    this.ps.add(this.myFormGroup.value).subscribe(v=> {
      console.log(v)
      this.router.navigateByUrl("/products")
    })
  }
}
