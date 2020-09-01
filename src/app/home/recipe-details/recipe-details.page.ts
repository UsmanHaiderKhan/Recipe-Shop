import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Home } from '../home.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedHome: Home;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/home']);
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedHome = this.recipeService.getRecipeById(recipeId);
    });
  }
  async onDeleteRecipe() {
    const alert = await this.alertController.create({
      header: 'Message!',
      message: 'Are You Sure You Want to delete this.???',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedHome.id);
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();

    console.log('Delete');
  }
}
