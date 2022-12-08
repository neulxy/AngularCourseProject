import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice(); //by using slice, just return a copy of the recipe array and do not touch the original array
  }
}
