import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../service/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages'; 
import { AuthService } from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  name: string;
  email: string;
  password: string;
  username: string;

  constructor(private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
    if(localStorage.getItem("token")!=null){
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    const user = {
      name:this.name,
      email:this.email,
      password:this.password,
      username:this.username,
      role:["USER_ROLE"]
    }

    if(!this.validateService.validateRegister(user)){
      this.flashMessagesService.show("Please fill in all fields",{cssClass: 'alert-danger', timeout: 3000});
      return;
    }
    else if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show("Please fill in valid email",{cssClass: 'alert-danger', timeout: 3000});
      return;
    }

    this.authService.registerUser(user).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Registred! Please login now!",{cssClass: 'alert-success', timeout: 3000});
    });

  }

}
