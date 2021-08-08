import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 
import { AuthService } from '../../service/auth.service';
import {OrderService} from '../../order/order.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-other',
  templateUrl: './profile-other.component.html',
  styleUrls: ['./profile-other.component.css']
})
export class ProfileOtherComponent implements OnInit {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  myEmail: any;
  Message:string;
  title: any;
  price: any;

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private OrderService: OrderService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view Profile",{cssClass: 'alert-danger', timeout: 3000});
    }
    else{
      this.myEmail = localStorage.getItem("email");
      this.title = localStorage.getItem("title");
      this.price = localStorage.getItem("price");
      const username:any = localStorage.getItem("Username");
      this.authService.getUserByUsername(username).subscribe((data)=>{
        let profile:any = data;
        this.id = profile.id;
        this.name = profile.name;
        this.username = profile.username;
        // this.address = profile.address;
        this.password = profile.password;
        this.email = profile.email;
        this.Message = "";
      })
    }
  }

  onSubmit(){
      if(this.Message==""){
        this.flashMessagesService.show("Cannot sent Blank Message",{cssClass: 'alert-danger', timeout: 3000});
      }
      else{
        const EmailFormat = {
          "toEmail":this.email,
          "fromEmail":this.myEmail,
          "message":this.Message+" \n---------------------------------------\nFor Product [Title]: "
          +this.title+"   [Price]: "+this.price
        }
        this.OrderService.postEmail(EmailFormat).subscribe(((data)=>{
          console.log(data);
        }))
        this.flashMessagesService.show("Email Sent",{cssClass: 'alert-success', timeout: 3000});
      }
      this.ngOnInit();
  }
}
