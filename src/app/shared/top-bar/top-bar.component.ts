
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public product_Total: any
  public cartcount1: any;
  cartItem: any
  productName: any
  @Input() item: any;
  public product_detail: any;
  cartCount!: number;
  listRecord: any;
  constructor(private cart: CartService) {
    this.cart.cartCount.subscribe(res => {
      this.cartCount = res;
    });
  }
  public topbar = document.getElementsByClassName('wrap-menu-desktop') as any;
  ngOnInit(): void {
    this.product_detail = JSON.parse(localStorage.getItem('cart_items') + '')
    console.log(this.product_detail, 'Hello Top');
    this.getDatafromlocal();
    // this.product_Total = localStorage.getItem('gross_price')

    // this.cartcount1 = localStorage.getItem('item')

  }


  get cartData() {
    return this.product_Total = localStorage.getItem('gross_price')
  }

  windowScroll() {
    this.topbar[0].style.top = '40px';

    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {

      this.topbar[0].style.top = '0px';
      let isele = document.getElementsByClassName('container-menu-desktop') as any;
      isele[0].classList.add('fix-menu-desktop')
    }

  }
  getDatafromlocal() {
    this.listRecord = localStorage.getItem('item') != null ? JSON.parse(localStorage.getItem("item") || '') : []

  }

  get totalformlocal() {
    return localStorage.getItem('item') != null ? JSON.parse(localStorage.getItem("item") || '') : []
  }

  toggle() {
    let show = document.getElementById("wrap-header-cart") as any
    show.classList.add('show-header-cart');
  }

  // get cartItems() {
  //   //console.log('sds', localStorage.getItem('items'))
  //   return localStorage.getItem('items')
  // }

  // get cartItem() {
  //   let isEle = localStorage.getItem('item') != null ? JSON.parse(localStorage.getItem('item') || '') : [];
  //   let isell;
  //   isEle.forEach((element: any) => {
  //     isell = element.item
  //   });
  //   return isell
  // }

  removeToggle() {
    let show = document.getElementById("wrap-header-cart") as any
    show.classList.remove('show-header-cart');
  }

  searchModal() {
    let down = document.getElementById("show-search") as any
    down.classList.add('show-modal-search');
  }

  removeModal() {
    let up = document.getElementById("show-search") as any
    up.classList.remove('show-modal-search');
  }
}
