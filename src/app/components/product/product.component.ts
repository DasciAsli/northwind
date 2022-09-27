import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded=false;
//ActivatedRoute(Mevcut-Aktifleştirilmiş Route) bir Angular service'i.
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void { //Component açıldığında ilk çalışan metoddur.
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"])
      {
        this.getProductsByCategory(params["categoryId"]);
      }
      else{
        this.getProducts();
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response => 
      {
        this.products=response.data
        this.dataLoaded=true;
      }
      );
  }


  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response => 
      {
        this.products=response.data
        this.dataLoaded=true;
      }
      );
  }

}
