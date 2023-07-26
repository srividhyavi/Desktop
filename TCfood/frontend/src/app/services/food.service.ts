import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/model/Food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
  return sample_foods
}
//search Food
getAllFoodBySearchTerm(SearchTerm:string){
  return this.getAll().filter(food =>food.name.toLowerCase().includes(SearchTerm.toLowerCase()));
}

// Get All Food by id
getFoodById(foodId:string):Food{
  return this.getAll().find(food => food.id ==foodId)?? new Food();
}
}
