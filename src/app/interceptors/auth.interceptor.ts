import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    //postmande yapigimiz islem gibi düsünebilirsin

    let token =localStorage.getItem("token");//token'i yakaladik
    let newRequest : HttpRequest<any>;//Bizim yaptigimiz istek bu
    newRequest = request.clone({
      headers:request.headers.set("Authorization","Bearer " + token)
    })//Kullanicinin yapmaya calistigi requesti kolonla ama requeste ek bilgiler ver


    return next.handle(newRequest);
  }
}

