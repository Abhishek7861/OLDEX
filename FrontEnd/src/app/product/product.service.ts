import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  products: Product[];

  constructor(private http: HttpClient,
    private router: Router) { }

  getAllProducts(){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get("http://localhost:8080/api/test/allproduct",{headers:headers}).pipe(
      catchError(error =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return EMPTY;
      }),
    );
  }

  postProduct(pro: any){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.post("http://localhost:8080/api/test/addproduct",pro,{headers:headers});
  }

  getMyProductList(){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get("http://localhost:8080/api/test/myproduct",{headers:headers}).pipe(
      catchError(error =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return EMPTY;
      }),
    );
  }

  putProduct(pro: any){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.put("http://localhost:8080/api/product",pro,{headers:headers});
  }

  deleteProduct(id:number){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.delete("http://localhost:8080/api/test/delete/"+id,{headers:headers});
  }

}
