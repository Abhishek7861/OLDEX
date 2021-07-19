import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  products: Product[];

  constructor(private http: HttpClient) { }

  getAllProducts(){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get("http://localhost:8080/api/test/allproduct",{headers:headers});
  }

  postProduct(pro: any){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.post("http://localhost:8080/api/test/addproduct",pro,{headers:headers});
  }

  getMyProductList(){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get("http://localhost:8080/api/test/myproduct",{headers:headers});
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
