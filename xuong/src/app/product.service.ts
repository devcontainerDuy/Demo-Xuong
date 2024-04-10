import { Injectable } from '@angular/core';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  async getListProducts(url:string): Promise<ProductInterface[]> {
    const data = await fetch(url);
    return await data.json() ?? [];
  }

  // Hàm lấy 1 sản phẩm
  async getProductDetail(url:string): Promise<ProductInterface> {
    const data = await fetch(url);
    return await data.json() ?? {};
  }

  //Tìm kiếm 
  private keyword: string = '';
  setKeyword(keyword: string) {
    this.keyword = keyword;
  }
  getKeyword() {
    return this.keyword;
  }

  constructor() { }

  private cart: any = [];
  // addCart(product: ProductInterface, quantity: number) {
  //   this.cart.push({ ...product, quantity });
  // }
  addCart(product: ProductInterface, quantity: number) {
    const index = this.cart.findIndex((item: ProductInterface) => item.id === product.id);
    if (index === -1) {
      this.cart.push({ ...product, quantity });
    } else {
      this.cart[index].quantity += quantity;
    }
  }
  getCart() {
    return this.cart;
  }
  // getCartLength() {
  //   return this.cart.length;
  // }
  getCartLength() {
    let length = 0;
    for (let p of this.cart) {
      length += p.quantity;
    }
    return length;
  }
  getSumMoney(): number {
    let total = 0;
    for (let p of this.cart) {
      total += p.sale * p.quantity;
    }
    return total;
  }
  deleteCart(id: number): void {
    this.cart = this.cart.filter((item: ProductInterface) => item.id !== id);
  }

}
