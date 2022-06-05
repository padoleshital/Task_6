import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
