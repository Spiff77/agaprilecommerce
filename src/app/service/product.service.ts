import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8086/learn/api/products';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
  findOne(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
  }
  delete(id: number|undefined): Observable<Product[]>{
    return this.http.delete<Product[]>(`${this.url}/${id}`)
  }
  add(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}`, product)
  }

}
