import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fried Chicken',
      'This is a simple test A',
      'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2240,c_limit/RoastChicken_RECIPE_080420_37993.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Salad',
      'This is a simple test B',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/group_final-a6ddb3e.jpg',
      [new Ingredient('Apple', 2), new Ingredient('Tomatoes', 2)]
    ),
    new Recipe(
      'Recipe C',
      'This is a simple test C',
      'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2240,c_limit/RoastChicken_RECIPE_080420_37993.jpg',
      []
    ),
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); //by using slice, just return a copy of the recipe array and do not touch the original array
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipeById(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
