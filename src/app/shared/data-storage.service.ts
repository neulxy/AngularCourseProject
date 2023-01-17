import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
  ) {}

  private url =
    'https://ng-course-recipe-book-neu-default-rtdb.firebaseio.com/';

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.url}/recipes.json`, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${this.url}/recipes.json`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => ({
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : [],
        }));
      }),
      tap((recipes) => {
        // this.recipeService.setRecipes(recipes);
        this.store.dispatch(new RecipesActions.SetRecipes(recipes));
      })
    );
  }
}
