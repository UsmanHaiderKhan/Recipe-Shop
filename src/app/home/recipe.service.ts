import { Injectable } from '@angular/core';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Home[] = [
    {
      id: 'r1',
      title: 'Biryani',
      imageUrl:
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg',
      ingredients: ['meet', 'speices', 'oil', 'rice'],
    },
    {
      id: 'r2',
      title: 'Chawal',
      imageUrl:
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg',
      ingredients: ['meet', 'speices', 'oil', 'rice'],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return this.recipes;
  }
  getRecipeById(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
