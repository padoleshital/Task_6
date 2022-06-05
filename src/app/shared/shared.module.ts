import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 import { SharedRoutingModule } from './shared-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    TopBarComponent,    
    FooterComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    CarouselModule,
    NgImageSliderModule,
    MatBadgeModule
  ],
  exports: [
    TopBarComponent, 
    FooterComponent,

  ]  
})
export class SharedModule { }
