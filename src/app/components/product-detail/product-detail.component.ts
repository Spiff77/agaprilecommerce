import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private ps: ProductService,
              private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      this.ps.findOne(Number(id)).subscribe( v => this.product =v )
    }

  }

  removeItem() {
    this.ps.delete(this.product.id).subscribe(() => this.router.navigateByUrl('/products'))
  }
}
