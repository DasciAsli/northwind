import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//uygulama açıldığında <router-outlet> böümünde çalışacak component
  //path "" olsa da ,/products olsa da çalıştır demek için pathMatch:full diyoruz
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
