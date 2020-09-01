import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  recipes: Home[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
