import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  myForm!: FormGroup
  formSubmitted = false;

  constructor(private ps: ProductService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.nonNullable.group({
      id: '',
      name: ['', Validators.required],
      description: '',
      category: '',
      price: [0,[Validators.min(1), Validators.max(1000)]],
      promo: ''
    })
  }

  submit() {
    this.formSubmitted = true;
    if(this.myForm.valid){
      this.ps.add(this.myForm.value).subscribe(v=> {
        console.log(v)
        this.router.navigateByUrl("/products")
      })
    }
  }

  resetForm(){
      this.myForm.reset()
      Object.keys(this.myForm.controls).forEach(k => {
        this.myForm.get(k)?.setValue('')
      })
  }

}
