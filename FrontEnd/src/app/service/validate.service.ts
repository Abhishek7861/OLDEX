import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user:any){
      if(user.name== undefined || user.email== undefined || user.password== undefined || user.username== undefined){
        return false;
      }
      else{ 
        return true; 
      }
  }
  validateLogin(user:any){
    if(user.username== undefined || user.password== undefined){
      return false;
    }
    else{ 
      return true; 
    }
  }

  validateEmail(email:String) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
}
