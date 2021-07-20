import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 
import { AuthService } from '../../service/auth.service';

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

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view Profile",{cssClass: 'alert-danger', timeout: 3000});
    }
    else{
      const username:any = localStorage.getItem("Username");
      this.authService.getUserByUsername(username).subscribe((data)=>{
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

}
