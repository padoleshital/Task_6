import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/_service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {


  @Input() item: any;
  totalprice: any;
  shoppingForm!: FormGroup;
  public cartcout: number = 1;
  public add_product: any;
  sampleArray: any = {}
  isTotal: any;
  public count: any;
  data!: any;
  public total: number = 0;
  public price: any = 58;
  public total_price: any;
  listRecord: any;
  submitted = false;
  product_Item: any;
  public singleProdData: any = {};
  singleProductData: any = [];

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shoppingForm = this.formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      coupecode: ['', Validators.required]
    });

    this.product_Item = JSON.parse(localStorage.getItem('cart_items') + '')
    // console.log(this.product_Item, "product_item");
    // this.totalprice = localStorage.getItem("gross_price")
    //this.count = JSON.parse(localStorage.getItem("items") + '');
    console.log(this.product_Item);

  }
  get f() { return this.shoppingForm.controls }


  onsubmit() {
    this.submitted = true;

    if (this.shoppingForm.value) {
      return;
    }
  }

  // minusProduct(val: any) {
  //   this.cartService.minusQty(this.data)
  //   console.log(this.data);
  // }

  // addQty() {

  //   this.singleProductData.qtyTotal = this.singleProductData.qtyTotal + 1;

  //   // if (this.cartcout)
  //   //   this.cartcout = this.cartcout + 1
  //   // console.log(this.cartcout);


  // }


  addQty(cartData: any) {
    debugger
    this.item.filter((o: any) => {
      if (o.id === cartData.id) {
        o.qtyTotal += 1

        this.singleProdData = o;
      }
    });

    localStorage.setItem('cart_items', JSON.stringify(this.item));
  }
}
