import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  url: string = 'http://localhost:3000/products';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.url);
  }

  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.idProduit;
    const url=this.url+'/'+id;
    return this._http.delete<Product>(url);
  }

  addProduct (product: Product): Observable<Product> {
    return this._http.post<Product>(this.url, product, this.httpOptions);
  }
}
