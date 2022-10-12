import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44337/api/auth/";
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel) :Observable<SingleResponseModel<TokenModel>>{
    let newPath=this.apiUrl + "login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel);
  }

  isAuthenticated(){
    /*
    Aldigimiz token'i tarayicinin hatirlamasi gerekiyor.
    Http uygulamalari unutkandir.
    Tarayici yenilendigi anda hersey iptal olur,
    Dolayisiyla tarayicinin bu bilgileri hatirlamasi icin localstorage'de bilgileri tutariz*/
    if(localStorage.getItem("token"))//localStoragede token varsa 
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
