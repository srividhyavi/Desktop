import { Food } from "./app/shared/model/Food";

export const sample_foods: Food[] = [
    {
        id:'1',
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price: 10,
        favorite:false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jfif',
        tag: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id:'2',
        name:'Meatball',
        cookTime:'20-30',
        price: 20,
        favorite:true,
        origins: ['china', 'persia' ,'middle east'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jfif',
        tag: ['SlowFood', 'Lunch']
    },
    {
        id:'3',
        name:'Hamburger',
        cookTime:'10-20',
        price: 10,
        favorite:false,
        origins: ['us', 'germany'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jfif',
        tag: ['FastFood', 'Humburger']
    },
    {
        id:'4',
        name:'Fried Potatose',
        cookTime:'15-20',
        price: 5,
        favorite:true,
        origins: ['France'],
        stars: 3.5,
        imageUrl: 'assets/food-4.jfif',
        tag: ['FastFood', 'Fry']
    },
    {
        id:'5',
        name:'Chicken curry',
        cookTime:'40-50',
        price: 10,
        favorite:false,
        origins: ['india'],
        stars: 4.5,
        imageUrl: 'assets/food-5.jfif',
        tag: ['Dinner', 'Lunch']
    },
    {
        id:'6',
        name:'Vegetable pizza',
        cookTime:'15-20',
        price: 10,
        favorite:false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-6.jfif',
        tag: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id:'7',
        name:'Spicy Cheese Burder',
        cookTime:'15-20',
        price: 12,
        favorite:false,
        origins: ['indian'],
        stars: 4.0,
        imageUrl: 'assets/food-7.jfif',
        tag: ['FastFood', 'Burger', 'Lunch']
    },
    {
        id:'8',
        name:'Fish fry',
        cookTime:'30-35',
        price: 10,
        favorite:false,
        origins: ['indian'],
        stars: 4.5,
        imageUrl: 'assets/food-8.jfif',
        tag: ['Lunch']
    }
]