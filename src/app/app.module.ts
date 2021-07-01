import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LSDRAboutComponent } from './lsdr-about/lsdr-about.component';
import { LSDRProductsComponent } from './lsdr-products/lsdr-products.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { LsdrWhoComponent } from './lsdr-who/lsdr-who.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LSDRAboutComponent,
    LSDRProductsComponent,
    CartComponent,
    InputIntegerComponent,
    LsdrWhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
