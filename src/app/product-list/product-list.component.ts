import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[
  {
    name:"Empanada",
    variety:"Jamon y Queso",
    price:60,
    stock:10,
    image:"assets/image/jyq.jpeg",
    clearance:false,
    quantity:0,
  },
  {
    name:'Pizza',
    variety:'Muzzarella',
    price:380,
    stock:5,
    image:"assets/image/muzza.jpeg",
    clearance:true,
    quantity:0,
  },
  {
    name:'Empanada',
    variety:'Carne',
    price:60,
    stock:0,
    image:"assets/image/carne.jpeg",
    clearance:false,
    quantity:0,
  },
  {
    name:'Pizza',
    variety:'Especial',
    price:430,
    stock:5,
    image:"assets/image/especial.jpeg",
    clearance:false,
    quantity:0,
  }
]
  
  constructor(private cart:ProductCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(product: Product):void{
    this.cart.addToCart(product);
    product.stock-=product.quantity;
    product.quantity=0;
  }

  maxReached(m:string){
    alert(m);
  }

}
