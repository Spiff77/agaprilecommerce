import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
              private ps: ProductService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      this.ps.findOne(Number(id)).subscribe( v => this.product =v )
    }

  }

}
