import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supplier} from '../model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private url = 'http://localhost:8086/learn/api/suppliers';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.url)
  }
  findOne(id: number): Observable<Supplier>{
    return this.http.get<Supplier>(`${this.url}/${id}`)
  }
  delete(id: number|undefined): Observable<Supplier[]>{
    return this.http.delete<Supplier[]>(`${this.url}/${id}`)
  }
  add(supplier: Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(`${this.url}`, supplier)
  }
}
