import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trangchu',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './trangchu.component.html',
  styleUrl: './trangchu.component.css'
})
export class TrangchuComponent {
  
  productsHot : ProductInterface[] = [];
  productsTrongNuoc : ProductInterface[] = [];
  productsQuocTe : ProductInterface[] = [];
  prductService: ProductService =inject(ProductService);
  p: any;
  selectedSort: string = 'asc';
  constructor(){
    this.prductService.getListProducts('http://localhost:3000/products?hot=1').then((data:ProductInterface[])=>{
      this.productsHot = data;
      console.log(this.productsHot);
    }
    );

    this.prductService.getListProducts('http://localhost:3000/products?kind=trong nước').then((data:ProductInterface[])=>{
      this.productsTrongNuoc = data;
      console.log(this.productsTrongNuoc);
    }
    );

    this.prductService.getListProducts('http://localhost:3000/products?kind=quốc tế').then((data:ProductInterface[])=>{
      this.productsQuocTe = data;
      console.log(this.productsQuocTe);
    }
    );
  }
  onSortChange(): void {
    if (this.selectedSort === 'asc') {
      this.productsHot.sort((a, b) => a.sale - b.sale); // Sắp xếp tăng dần
    } else {
      this.productsHot.sort((a, b) => b.price - a.price); // Sắp xếp giảm dần
    }
  }

}
