import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cod Fish', 'Some random recipe', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('White Rice', 'Another simple recipe', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}