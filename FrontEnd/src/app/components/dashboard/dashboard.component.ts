import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string;
  description: string;
  price: number;
  condition: string
  id: number;

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService,
    public productService: ProductService) { }

  ngOnInit(): void {
    this.id = 0;
    if(localStorage.getItem("token")==null){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view My Listing",{cssClass: 'alert-danger', timeout: 3000});
    }
    this.productService.getMyProductList().subscribe((res)=>{
        const response:any = res;
        this.productService.products = response.data as Product[];
    })
  }

  onSubmit()
  {
    if(this.id==0){
      const product = {
        title:this.title,
        description:this.description,
        price:this.price,
        condition:this.condition
      }
      this.productService.postProduct(product).subscribe((res)=>{
        this.ngOnInit();
        this.flashMessagesService.show("Product add Success",{cssClass: 'alert-success', timeout: 3000});
      })
    }else{
      const product = {
        id:this.id,
        title:this.title,
        description:this.description,
        price:this.price,
        condition:this.condition
      }
      this.productService.postProduct(product).subscribe((res)=>{
        this.ngOnInit();
        this.flashMessagesService.show("Product Update Success",{cssClass: 'alert-success', timeout: 3000});
      })
    }
  }

  onDelete(pro:Product)
  {
    if (confirm("Are you sure to delete this record?")==true){
      this.productService.deleteProduct(pro.id).subscribe((res)=>{
        this.ngOnInit();
        console.log(res);
        // this.flashMessagesService.show("Product Delete Success",{cssClass: 'alert-success', timeout: 3000});
      })
    }
  }

  onEdit(pro:Product){
    this.id = pro.id;
    this.condition = pro.condition;
    this.description = pro.description;
    this.price = pro.price;
    this.title = pro.title;
  }
}
