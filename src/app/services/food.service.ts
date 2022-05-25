import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    getFoods(): Food[] {
        return [
            {
                id: 1,
                title: 'Sea Food',
                price: 12,
                image: 'assets/images/hamburger.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            },
            {
                id: 2,
                title: 'Burger',
                price: 21,
                image: 'assets/images/hamburger.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            },
            {
                id: 3,
                title: 'Mussels',
                price: 16,
                image: 'assets/images/hamburger.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            },
            {
                id: 4,
                title: 'Pizza',
                price: 20,
                image: 'assets/images/hamburger.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            },
            {
                id: 5,
                title: 'Breakfast',
                price: 10,
                image: 'assets/images/hamburger.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            },
            {
                id: 6,
                title: 'Tambi',
                price: 13,
                image: 'assets/images/hamburger.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            }
        ];
    }

    getFood(id: number) {
        return this.getFoods().find(food => food.id === id);
    }
}