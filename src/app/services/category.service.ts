import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Catergory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:7157/api/Categories/GetAll';
  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<ListResponseModel<Catergory>> {
    return this.httpClient
      .get<ListResponseModel<Catergory>>(this.apiUrl);
  }
}
 