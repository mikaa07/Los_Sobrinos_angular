import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  quantity: number =0;

  @Input()
  max: number=0;

  @Output()
  quantityChange:EventEmitter<number>=new EventEmitter<number>();

  @Output()
  maxReached:EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity():void{
    if(this.quantity<this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }else
  this.maxReached.emit("se alcanzo el max");

  }

  downQuantity():void{
    if(this.quantity>0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event:any):void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
