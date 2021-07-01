import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LSDRAboutComponent } from './lsdr-about/lsdr-about.component';
import { LSDRProductsComponent } from './lsdr-products/lsdr-products.component';
import { LsdrWhoComponent } from './lsdr-who/lsdr-who.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component:LSDRProductsComponent
  },
  {
    path:'about',
    component:LSDRAboutComponent
  },
  {
    path:'who',
    component:LsdrWhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
