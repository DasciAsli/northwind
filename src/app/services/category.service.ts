import {HttpClient} from '@angular/common/http' //Bunun vasıtasıyla backende(apiye) istekte bulunabiliyoruz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({ 
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44337/api/categories/getall";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{ 
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
