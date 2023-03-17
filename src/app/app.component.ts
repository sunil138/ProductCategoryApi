import { Component } from '@angular/core';
import { ProductCategory } from './models/ProductCategory';
import { ProductcategoryService } from './services/productcategory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductCategoryApi';
 
  productList:any=[];
  updatedata:any;
  pro:ProductCategory=
  {
      id:'',
      productName:'',
      productPrice:0,
      productReview:'',
      categoryName:''
  }
  currentData:ProductCategory= 
  {
      id:'',
      productName:'',
      productPrice:0,
      productReview:'',
      categoryName:''
  }
  GetProducts()
  {
    this.service.GetPosts().subscribe(response=>{
      this.productList=response; 
      console.log(response); 
    })
  }
  AddProducts()
  {
    this.service.AddPosts(this.pro).subscribe(response=>{
      this.GetProducts(); 
      console.log(response); 
    })
  }

  DeleteProduct(id:any)
  {
    this.service.DeletePosts(id).subscribe(response=>{
      this.GetProducts(); 
      console.log(response); 
    })
  }

  UpdateProducts()
  {
    this.service.UpdatePosts(this.currentData).subscribe(response=>{
      this.GetProducts();
      console.log(response);  
    })
  }

  getdata(data:ProductCategory)
  {
    this.service.GetPostsById(data.id).subscribe(response=>{
      this.updatedata=response;
      this.currentData=this.updatedata; 
    })
  }
  constructor(private service:ProductcategoryService){}
  ngOnInit()
  {
    this.GetProducts(); 
  }
}
