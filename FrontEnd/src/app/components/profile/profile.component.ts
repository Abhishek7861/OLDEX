import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  // address: string;

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view Profile",{cssClass: 'alert-danger', timeout: 3000});
    }
    else{
      this.authService.getUser().subscribe((data)=>{
        console.log(data);
        let profile:any = data;
        this.id = profile.id;
        this.name = profile.name;
        this.username = profile.username;
        // this.address = profile.address;
        this.password = profile.password;
        this.email = profile.email;
      })
    }
  }

  onSubmit(){
    const user = {
      id:this.id,
      name:this.name,
      email:this.email,
      password:this.password,
      username:this.username,
      "roles": [
        {
            "id": 1,
            "name": "ROLE_USER"
        }
    ]
      // address:this.address
    }

      this.authService.updateUser(user).subscribe((res)=>{
        this.flashMessagesService.show("Profile Update Success!",{cssClass: 'alert-success', timeout: 3000});
        this.ngOnInit();
      })
  }

}
