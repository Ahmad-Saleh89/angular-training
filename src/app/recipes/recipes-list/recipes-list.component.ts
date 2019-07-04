import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('First Recipe', 'Some random recipe', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg'),
    new Recipe('Second Recipe', 'Another simple recipe', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}