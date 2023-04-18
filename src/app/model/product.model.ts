import {Supplier} from './supplier.model';

export interface Product{
  id: number,
  name: string,
  category: string,
  description: string,
  price: number,
  promo: number,
  active: boolean,
  supplier?: Supplier
}
