import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('First Test Recipe','This is just a Test recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Second Test Recipe','This is just a Test recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Third Recipe','This is just a Test recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
