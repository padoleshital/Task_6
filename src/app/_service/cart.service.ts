import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../modal/product.model';
import { BehaviorSubject } from 'rxjs';
import { event } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount = new BehaviorSubject<number>(0);
  public cartcout: number = 1;
  public singleProdData: any = {};
  public isEvent: any;
  qtyTotal!: number;
  constructor() { }
  items: any = [];
  public isvalue: any = 1;
  public cartData: any;

  // items1: any = [];
  addToCart(data: any) {
    this.items.push(data);
    let existingItems = [];
    if (localStorage.getItem('cart_items')) {

      existingItems = JSON.parse(localStorage.getItem('cart_items') || '');

      existingItems = [data, ...existingItems];
      console.log('Items exists');
    }
    else {
      console.log('NO items exists');
      existingItems = [data];
    }
    this.saveCart();
    // let cartData: any = JSON.parse(localStorage.getItem("cart_details") + '');
    // console.log("cartData", cartData);
    //this.items.push(cartData);
    // console.log(addedItem);
  }

  getItems() {
    return this.items;
  }

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem('cart_items') as string) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  itemInCart(cartData: any): boolean {
    return this.items.findIndex((o: any) => o.id === cartData.id) > -1;
  }

  // minusQty(cartData: any) {

  //   this.items.filter((o: any) => {
  //     if (this.qtyTotal > 1)
  //       if (o.id === cartData.id) {
  //         o.qtyTotal -= 1
  //         this.singleProdData = o;

  //         console.log("+++++++++", this.singleProdData.qtyTotal);
  //         const isvalue = this.singleProdData.qtyTotal;
  //         console.log("Value ", + isvalue);
  //       }
  //   });
  //   localStorage.setItem('cart_items', JSON.stringify(this.items));
  // }

  // addQty(cartData: any) {
  //   this.items.filter((o: any) => {

  //     if (o.id === cartData.id) {
  //       // o.qtyTotal += 1

  //       this.singleProdData = o;
  //       console.log('o', o);
  //       console.log("+++++++++", this.singleProdData.qtyTotal);
  //       this.singleProdData.qtyTotal;
  //       this.isvalue++
  //       console.log(this.isvalue)
  //       o.qtyTotal = this.isvalue;
  //       console.log('qtyTotal', o.qtyTotal);
  //     }

  //     // this.singleProdData.qtyTotal = 1;
  //     console.log("aaaaaaaaaa" + this.singleProdData.qtyTotal);
  //     //localStorage.setItem('cart_items', JSON.stringify(this.items));
  //   });

  // }



}


