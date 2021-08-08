import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product.model';

import {Order} from '../../order/order.model';
import {OrderService} from '../../order/order.service';


@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService,
    public productService: ProductService,
    private OrderService: OrderService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view All Listing",{cssClass: 'alert-danger', timeout: 3000});
    }
    this.productService.getAllProducts().subscribe((res)=>{
      const response:any =res;
      this.productService.products = response.data as Product[];
    })
  }

  onBuy(pro:Product){
    if (confirm("Are you sure to Buy "+pro.title+" for "+pro.price+" ?")==true){
      const order = {
        title:pro.title,
        price:pro.price,
        username:pro.username
      }
      this.OrderService.postOrder(order).subscribe(data=>{
        this.flashMessagesService.show("Successful Purchase! check your orders!",{cssClass: 'alert-success', timeout: 3000});
      })
    }
  }
  onListedBy(pro:Product){
    localStorage.setItem("Username",pro.username);
    localStorage.setItem("title",pro.title);
    localStorage.setItem("price",pro.price.toString());
    this.router.navigate(['/profileOther']);
  }
}
