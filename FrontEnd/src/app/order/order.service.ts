import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable,EMPTY } from 'rxjs';
import { map ,catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order;
  orders: Order[];

  constructor(private http: HttpClient,
    private router: Router) { }

  postOrder(order: any){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.post("http://localhost:8080/api/test/order",order,{headers:headers});
  }

  postEmail(Email: any){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.post("http://localhost:8080/sendEmail",Email,{headers:headers});
  }

  getOrder(){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get("http://localhost:8080/api/test/orders",{headers:headers}).pipe(
      catchError(error =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return EMPTY;
      }),
    );
  }

}
