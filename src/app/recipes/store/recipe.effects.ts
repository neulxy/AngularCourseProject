import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
  private url =
    'https://ng-course-recipe-book-neu-default-rtdb.firebaseio.com/';

  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(() => this.http.get<Recipe[]>(`${this.url}/recipes.json`)),
      map((recipes) => {
        return recipes.map((recipe) => ({
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : [],
        }));
      }),
      map((recipes) => {
        return new RecipesActions.SetRecipes(recipes);
      })
    )
  );

  storeRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
          return this.http.put(
            `${this.url}/recipes.json`,
            recipesState.recipes
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
