import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/modal/product';
import { CartService } from 'src/app/_service/cart.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {
  total: any;
  item: any = 1;
  product!: Product[];
  products: Product[] = [];
  isActive!: string;
  matchProduct!: Product[];
  data: any;

  public cartcout: number = 0;
  displayImg = 0;
  listRecord: any;
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
  count!: number;
  ngOnInit(): void {

    // product slides start
    this.slides = [
      { img: "../../../assets/images/product-detail-01.jpg" },
      { img: "../../../assets/images/product-detail-01.jpg" },
      { img: "../../../assets/images/product-detail-01.jpg" },
    ];

    // ],
    // this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
    //product slides end
    this.product = [
      {
        "id": 1,
        "productName": "Esprit Ruffle Shirt",
        "image": "/assets/images/product-01.jpg",
        "category": "men",
        "price": 16.64
      },

      {
        "id": 2,
        "productName": "Herschel supply",
        "image": "/assets/images/product-02.jpg",
        "category": "women",
        "price": 35.31
      },
      {
        "id": 3,
        "productName": "Only Check Trouser",
        "image": "/assets/images/product-03.jpg",
        "category": "men",
        "price": 25.50
      },
      {
        "id": 4,
        "productName": "Classic Trench Coat",
        "image": "/assets/images/product-01.jpg",
        "category": "men",
        "price": 75.00
      },
      {
        "id": 5,
        "productName": "Front Pocket Jumper",
        "image": "/assets/images/product-02.jpg",
        "category": "bag",
        "price": 34.75
      },
      {
        "id": 6,
        "productName": "Vintage Inspired Classic",
        "image": "/assets/images/product-03.jpg",
        "category": "shoes",
        "price": 93.20
      }
    ];

    this.matchProduct = this.product;
  }
  open(content: any) {
    this.modalService.open(content);
  }

  filterData(element: any) {
    this.isActive = element;
    console.log(element)
    if (element == 'all') {
      this.matchProduct = this.product;
    }
    else {
      this.matchProduct = this.product.filter((ele) => {
        return ele.category == element;
      });
    }
  }
  //filter popup 
  toggle() {

    let show = document.getElementById('show-filter') as any
    show.classList.toggle('show-filter');
    let isPanel = document.getElementById('is-panel') as any;
    if (!show.classList.contains('show-filter')) {
      isPanel.style.display = 'none';
      console.log('aaaaa');
    } else {
      isPanel.style.display = 'block';
    }
  }
  // filter end

  // search
  toggleSearch() {

    var show = document.getElementById('show-search') as any
    var labelshow = document.getElementById('is-for-search') as any;
    labelshow.classList.toggle('show-search');
    if (show.style.display == "none") {
      show.style.display = "block";
      console.log('aaa');
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
  constructor(config: NgbModalConfig, private modalService: NgbModal, public cartService: CartService, private route: ActivatedRoute) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  // minusProduct(val: any) {
  //   if (this.cartcout > 1)
  //     this.cartcout = this.cartcout - 1
  //   console.log(this.cartcout);

  //   localStorage.setItem('items', this.cartcout + '')
  // }

  // addProduct(val: any) {
  //   this.cartcout = this.cartcout + 1;
  //   console.log(this.cartcout);
  //   localStorage.setItem('items', this.cartcout + '');
  // }
  // isTotal: any;

}







