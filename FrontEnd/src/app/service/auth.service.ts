import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages'; 
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  user:any;

  constructor(private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private router: Router) { }

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

  getUserByUsername(username:string){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get('http://localhost:8080/api/test/user/'+username,{headers:headers}).pipe(
      catchError(error =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return EMPTY;
      })
    );    
  }

  getUser(){
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.get('http://localhost:8080/api/test/user',{headers:headers}).pipe(
      catchError(error =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.flashMessagesService.show("Session Expired Please Login!",{cssClass: 'alert-danger', timeout: 3000});
        return EMPTY;
      })
    );
  }

  updateUser(user:any){
    console.log(user);
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.put('http://localhost:8080/api/test/user',user,{headers:headers}).pipe(
      catchError(error =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.flashMessagesService.show("Session Expired Please Login!",{cssClass: 'alert-danger', timeout: 3000});
        return EMPTY;
      }),
    );
  }
}
