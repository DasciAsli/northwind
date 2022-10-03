import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[];
  currentCategory:Category; //tsconfig.jsondaki "strictPropertyInitialization": false komutu ile bu şekilde kullanabiliyoruz artık
  nullCategory:Category;
  IsActiveAllProduct:boolean=true;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  
  getCategories(){
    this.categoryService.getCategories().subscribe(
      response=>
      {
        this.categories=response.data;
      }
    );
  }


  setCurrentCategory(category:Category)
   {
    this.IsActiveAllProduct=false;
    this.currentCategory=category;
   }


   getCurrentCategoryClass(category:Category)
   {
    if(category==this.currentCategory)
    {
      return "list-group-item active";
    }
    else
    {
      return "list-group-item";
    }
   } 

  getAllCategoryClass(){
    if(this.IsActiveAllProduct==true){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }
  }

  IsActiveAllProducts(){
    this.currentCategory=this.nullCategory;
    if(this.IsActiveAllProduct==false){
      this.IsActiveAllProduct=true;
     }
     else{
       this.IsActiveAllProduct=false;
     }
  }
  
}
