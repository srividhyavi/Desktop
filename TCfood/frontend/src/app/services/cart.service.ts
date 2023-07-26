import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/model/Cart';
import { Food } from '../shared/model/Food';
import { CartItem } from '../shared/model/Cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart:Cart = new Cart();
 private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }
  //add to cart Method
  addToCart(food:Food):void{
    let catrItem= this.cart.items.find(item => item.food.id ===food.id)
    if(catrItem)
    return;

    this.cart.items.push(new CartItem(food))
    this.setCartToLocalStorage();
  }
  //Remove cart item
  removeFromCart(foodId:string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id !=foodId)
    this.setCartToLocalStorage();
  }
  //change Quantity
  changeQuantity(foodId:string, quantity:number){
    let catrItem = this.cart.items.find(item =>item.food.id ===foodId);
    if(!catrItem)
    return;

    catrItem.quantity = quantity,
    catrItem.price = quantity * catrItem.food.price;
    this.setCartToLocalStorage();
  }
  //clear Cart
  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  //get cart Observable mean check Observable data
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
  //now set Localstorage data
  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) =>
    prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) =>
    prevSum + currentItem.quantity, 0)

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);
    this.cartSubject.next(this.cart)
  }
  //When ever set local storage data then alse get data
  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson?JSON.parse(cartJson):new Cart();
  }
}
