import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductComponent } from './product/product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Index2Component } from './index2/index2.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { SwiperModule } from 'swiper/angular';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductComponent,
    ShopingCartComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    Index2Component,
    BlogDetailComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FontAwesomeModule,
    SlickCarouselModule,
    CarouselModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],

})
export class PagesModule { }
