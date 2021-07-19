import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 

import {Order} from '../../order/order.model';
import {OrderService} from '../../order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService,
    public orderService: OrderService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view Orders",{cssClass: 'alert-danger', timeout: 3000});
    }
    this.orderService.getOrder().subscribe((res)=>{
      this.orderService.orders = res as Order[]; 
    })
  }
}
