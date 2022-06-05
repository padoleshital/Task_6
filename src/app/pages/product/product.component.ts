import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { CartService } from 'src/app/_service/cart.service';
import { NgbModal, NgbModalConfig, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product } from 'src/app/modal/product.model';
import { data } from 'jquery';
import { CurrencyPipe } from '@angular/common';
import { _isNumberValue } from '@angular/cdk/coercion';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
// export class NgbdModalBasic {
//   closeResult = '';
// }
export class ProductComponent implements OnInit {

  productitem: string = "item"

  viewForm!: FormGroup;
  id: any;
  product: any
  isActive: string = 'all';
  // matchProduct!: Product[];
  matchProduct: {
    id: number;
    productName: string;
    image: string;
    category: any;
    price: any;
  }[] = [];

  public count: any;
  public cartcout: any = 1;
  public price: any = 58.79;
  sampleArray: any = {};
  submitted = false;
  content: any;
  closeResult: string | undefined;
  modalRef: any;
  curData!: string;
  prdArray: any = [];
  public productCount: any;
  i!: number;
  items: any = [];
  isTotal: any;
  cartProductList = [];
  singleProductData: any = [];
  // slider start
  wrapSlick1: any;

  slides = [
    { img: "assets/images/slide-01.jpg" },
    { img: "assets/images/slide-02.jpg" },
    { img: "assets/images/slide-03.jpg" },
    { img: "assets/images/slide-04.jpg" }
  ];
  slideConfig1 = { "slidesToShow": 1, "slidesToScroll": 1, dots: true, arrows: true };
  slideConfig = {
    "slidesToShow": 1, "slidesToScroll": 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    "fade": true,
    "speed": 1000,
    infinite: true,
    "autoplay": true,
    "autoplaySpeed": 6000,
    arrows: true,
    // appendArrows: $('.wrap-slick1'),
    prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
    nextArrow: '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
    dots: true,
    // appendDots: $('.wrap-slick1').find('.wrap-slick1-dots'),
    dotsClass: 'slick1-dots',
    customPaging: function (slick: any, index: any) {
      var linkThumb = $(slick.$slides[index]).data('thumb');
      var caption = $(slick.$slides[index]).data('caption');
      return
      '<span class="caption-dots-slick1">' + caption + '</span>';
    }
  };


  constructor(
    private fb: FormBuilder,
    config: NgbModalConfig,
    private modalService: NgbModal,
    public cartService: CartService,
    public route: ActivatedRoute,
    public activeModal: NgbActiveModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.viewForm = this.fb.group({
      color: ['', Validators.required],
      size: ['', Validators.required]
    });
    this.isActive = 'all';
    // this.productCount = JSON.parse(localStorage.getItem("items") || '')

    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    console.log("items ===>>>>>>>", this.items);

    this.product = [
      {
        "id": 1,
        "productName": "Esprit Ruffle Shirt",
        "image": "/assets/images/product-01.jpg",
        "category": "women",
        "price": 16.64,
        "qtyTotal": 1

      },

      {
        "id": 2,
        "productName": "Herschel supply",
        "image": "assets/images/product-02.jpg",
        "category": "women",
        "price": 35.31,
        "qtyTotal": 1

      },
      {
        "id": 3,
        "productName": "Only Check Trouser",
        "image": "assets/images/product-03.jpg",
        "category": "men",
        "qtyTotal": 1,
        "price": 25.54,
      },
      {
        "id": 4,
        "productName": "Classic Trench Coat",
        "image": "/assets/images/product-01.jpg",
        "category": "women",
        "price": 75.00,
        "qtyTotal": 1

      },
      {
        "id": 5,
        "productName": "Front Pocket Jumper",
        "image": "assets/images/product-02.jpg",
        "category": "women",
        "price": 34.75,
        "qtyTotal": 1

      },
      {
        "id": 6,
        "productName": "Vintage Inspired Classic",
        "image": "assets/images/product-03.jpg",
        "category": "watch",
        "price": 93.02,
        "qtyTotal": 1

      }
    ]

    this.matchProduct = this.product;
  }


  openproductdata(content: any, curData: any) {

    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      let data = JSON.parse(localStorage.getItem('cart_items') || '')
      console.log('data', data);
      // data.forEach((element: any) => {
      //   if (element.id == curData.id) {
      //     element.qtyTotal = 1;

      //     let isele = element
      //     let isUpdatedData = { ...data, ...isele }
      //     let isData = Object.assign(data, isele)
      //     console.log('isData', isData);
      //     localStorage.setItem('cart_items', (JSON.stringify(isData)))
      //   }
      // });
      // console.log(JSON.parse(localStorage.getItem('cart_items') || ''), '73')
    });
    this.singleProductData = curData;
    console.log('curdata', curData);

    //localStorage.setItem('data', JSON.stringify(this.product))

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSave() {
    this.modalRef.close();
  }


  get f() {
    return this.viewForm.controls;
  }

  onsubmit() {
    this.submitted = true;
    if (this.viewForm.invalid) {
      return;
    }
  }
  // filterData start 

  filterData(ele: string) {

    this.isActive = ele;
    if (ele == 'all') {
      this.matchProduct = this.product;
    } else {
      this.matchProduct = this.product.filter((el: any) => {
        return el.category == ele
      });
    }
  }
  //filterData End


  //filter popup start
  togglefilter() {
    let show = document.getElementById("show-filter") as any
    show.classList.toggle("show-filter");
    let isPanel = document.getElementById("is-panel") as any
    if (show.classList.contains('show-filter')) {
      isPanel.style.display = "none";
    }
    else {
      isPanel.style.display = "block";
    }
  }
  //filter end

  //search filter
  toggleSearch() {
    let show = document.getElementById('show-search') as any

    var labelshow = document.getElementById('is-for-search') as any
    labelshow.classList.toggle('show-search');
    if (show.style.display == "none") {
      show.style.display = "block";
    }
    else {
      show.style.display = "none";
    }
  }


  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit() {
    // console.log('slick initialized');
  }

  breakpoint() {
    // console.log('breakpoint');
  }

  afterChange() {
    // console.log('afterChange');
  }

  beforeChange() {
    // console.log('beforeChange');
  }
  //slider end


  minusQty() {

    if (this.singleProductData.qtyTotal == 1) return;

    this.singleProductData.qtyTotal = this.singleProductData.qtyTotal - 1;
    //   this.cartService.minusQty(prodData);
    //   this.productCount = JSON.parse(localStorage.getItem("items") || '')
  }


  addToCart(item: any) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = this.singleProductData.qtyTotal;
      console.log('item.qtyTotal', item.qtyTotal)
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
      localStorage.setItem('cart_items', JSON.stringify(this.items));
    }

  }
}









