import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";

@Injectable()
export class CartProductService {
  constructor(private cartService: CartService) { }


}
