import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  sendEmail(EmailFormat:any){
    console.log("send Message");
    let authValue:any = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':authValue});
    return this.http.post("http://localhost:8080/api/test/sendEmail",EmailFormat,{headers:headers});
  }
}
