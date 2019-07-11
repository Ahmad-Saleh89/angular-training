import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cod Fish', 'Some random recipe', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg'),
    new Recipe('White Rice', 'Another simple recipe', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}