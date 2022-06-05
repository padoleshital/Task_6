import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import * as $ from 'jquery'

const routes: Routes = [
  
  { path: 'footer', component: FooterComponent },
  { path: 'top-bar', component: TopBarComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
