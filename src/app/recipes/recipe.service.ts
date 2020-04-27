import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
   private recipes:Recipe[] = [
        new Recipe('Tandoori Chicken'
        ,'This is Tandoori Chicken'
        ,'https://cdn.pixabay.com/photo/2018/06/01/20/25/chicken-3447081_960_720.jpg'
        ,[
          new Ingredient('Chicken',6),
          new Ingredient('Chicken Masala',1),
          new Ingredient('onion',1),
        ]),
        new Recipe('Paneer tikka'
        ,'This is Paneer Tikka'
        ,'https://images.pexels.com/photos/1151748/pexels-photo-1151748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        ,[
          new Ingredient('Paneer',5),
          new Ingredient('Onion',1)
        ]),
        new Recipe('Paneer Dosa'
        ,'This is Paneer Dosa recipe'
        ,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTP9RxDFu2shfwi5Y1MX8qxwcq5scgbV6cMnsyeagPlb8paCSU3&usqp=CAU'
        ,[
          new Ingredient('Daal mixture',5),
          new Ingredient('Paneer',5),
          new Ingredient('Onion',1)
        ])
      ];
      constructor(private shoppingListService: ShoppingListService){

      }
      getRecipes(){
          return this.recipes.slice(); 
      }
      getRecipeById(id:number){
        return this.recipes[id];
      }
      addIngredientToShoppingList(ingredients: Ingredient[]){
        debugger;
          this.shoppingListService.addIngredient(ingredients);
      }
}