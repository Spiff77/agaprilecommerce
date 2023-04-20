import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {SupplierService} from '../../service/supplier.service';
import {Supplier} from '../../model/supplier.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  myForm!: FormGroup
  formSubmitted = false;
  public suppliers: Supplier[] = [];

  constructor(private ps: ProductService,
              private sups: SupplierService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.nonNullable.group({
      id: '',
      name: ['', Validators.required],
      description: '',
      category: '',
      price: [0,[Validators.min(1), Validators.max(1000)]],
      promo: '',
      colors: this.fb.array(['', '']),
      supplier: this.fb.group({
        id: ['', Validators.required]
      })
    })
    this.sups.findAll().subscribe( v => {
      this.suppliers = v
      this.myForm.get('supplier.id')?.setValue(this.suppliers[0].id)
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

  getColorsFormArray(): FormArray{
    return this.myForm.get('colors') as FormArray
  }

  addColor() {
    this.getColorsFormArray().push(this.fb.control(''))
  }

  removeColor(index: number) {
    this.getColorsFormArray().removeAt(index)
  }
}
