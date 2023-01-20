import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Baked Ratatouille', 'Made by Remy',
            'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',[
                new Ingredient('Eggplant', 2),
                new Ingredient('Roma Tomatoes', 6),
                new Ingredient('Yellow Squashes', 2),
                new Ingredient('Zucchinis', 2),
                new Ingredient('Onion', 1),
                new Ingredient('Cloves Garlic', 4)
            ]),
        new Recipe(
            'Pasta Aglio e Olio', 'Made by Chef Carl Casper',
            'https://www.shockinglydelicious.com/wp-content/uploads/2014/06/Pasta-Aglio-e-Olio.jpg',[
                new Ingredient('Dried Spaghetti', 1),
                new Ingredient('Large Garlic Cloves', 12),
                new Ingredient('Crushed Red Pepper', 2),
                new Ingredient('Fresh Parsley,', 1),
                new Ingredient('Parmesan Cheese,', 2)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}