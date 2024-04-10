import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
// onSearch(arg0: string) {
//   throw new Error('Method not implemented.');
// }
  // title = 'xuong';

  productService: ProductService =inject(ProductService);
  constructor( private router: Router) { }
  //Chức năng tìm kiếm
  onSearch(inputsearch: string) {
    this.productService.setKeyword(inputsearch);
    console.log(inputsearch);
    if(this.router.url === '/timkiem'){
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/timkiem']);
      }else{  
        this.router.navigate(['/timkiem']);
      }
  }

}

