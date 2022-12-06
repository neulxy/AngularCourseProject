import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe A',
      'This is a simple test A',
      'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2240,c_limit/RoastChicken_RECIPE_080420_37993.jpg'
    ),
    new Recipe(
      'Recipe B',
      'This is a simple test B',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/group_final-a6ddb3e.jpg'
    ),
    new Recipe(
      'Recipe C',
      'This is a simple test C',
      'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2240,c_limit/RoastChicken_RECIPE_080420_37993.jpg'
    ),
  ];

  @Output() recipeClick = new EventEmitter<Recipe>();

  onSelect(recipe: Recipe) {
    this.recipeClick.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
