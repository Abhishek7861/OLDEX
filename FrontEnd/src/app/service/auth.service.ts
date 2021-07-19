import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  user:any;

  constructor(private http: HttpClient,
    private flashMessagesService: FlashMessagesService,) { }

  registerUser(user:any){
    return this.http.post('http://localhost:8080/api/auth/signup',user).pipe(
      catchError(error =>{
        this.flashMessagesService.show("Email and username already registered",{cssClass: 'alert-danger', timeout: 3000});
        return EMPTY;
      })
    );
  }

  loginUser(user:any){
    return this.http.post('http://localhost:8080/api/auth/signin',user).pipe(
      catchError(error =>{
        this.flashMessagesService.show("Incorrect Username or Password",{cssClass: 'alert-danger', timeout: 3000});
        return EMPTY;
      })
    );
  }

  getUser(){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get('http://localhost:8080/api/test/user',{headers:headers});
  }

  updateUser(user:any){
    console.log(user);
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.put('http://localhost:8080/api/test/user',user,{headers:headers}).pipe(
      catchError(error =>{
        this.flashMessagesService.show("Email or username already taken",{cssClass: 'alert-danger', timeout: 3000});
        return EMPTY;
      }),
    );
  }
}
