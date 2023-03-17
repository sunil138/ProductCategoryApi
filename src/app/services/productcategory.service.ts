import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  constructor(private http:HttpClient) { }
  GetPosts():Observable<any>
  {
    return this.http.get<any>("https://localhost:7226/api/ProductCategory");  
  }
  GetPostsById(id:any):Observable<any>
  {
    return this.http.get<any>("https://localhost:7226/api/ProductCategory"+"/"+id);  
  }
  GetPostsByName(categoryName:any)
  {
    return this.http.get<any>("https://localhost:7226/api/ProductCategory"+"/"+categoryName);  
  }
  AddPosts(data:any):Observable<any>
  {
    return this.http.post<any>("https://localhost:7226/api/ProductCategory",data); 
  }
  UpdatePosts(data:ProductCategory):Observable<any>
  {
    return this.http.put<any>("https://localhost:7226/api/ProductCategory"+"/"+data.id,data);  
  }
  DeletePosts(id:any):Observable<any>
  {
    return this.http.delete<any>("https://localhost:7226/api/ProductCategory"+"/"+id); 
  }
}
