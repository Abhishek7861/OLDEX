import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  LoggedIn:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("authValue")!='0'){
      this.LoggedIn = true;
    }
  }

  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  Profile(){
    this.router.navigate(['/profile']);
  }

  UserActive(active:any){
    console.log("from event"+active);
  }

  U(){
    console.log("from event");
  }

}
