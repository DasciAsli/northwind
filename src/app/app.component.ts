import { Component } from '@angular/core'; //Compenent deglarasyonunu kullanabilmek için angular/coredan import ediyoruz.

@Component({
  selector: 'app-root', //index.htmlde ap-root'u bu şekilde tanımasını sağlıyoruz
  templateUrl: './app.component.html',//app.component.html'in componentisin(./ anı klasörde bulunduğunu belirtiyor)
  styleUrls: ['./app.component.css'] //Bu html'in csslerini koyduğumuz yer.[] array demek
})
export class AppComponent {
  title: string = 'northwind'; //Bu componentin title isimli datası var.Tip güvenliğini sağlamak için :string ekledik
  user: string = 'Engin Demiroğ';
  
}
