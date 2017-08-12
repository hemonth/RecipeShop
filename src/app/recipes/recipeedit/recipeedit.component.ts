import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { CanComponentDeactivate } from '../../canDeactivateGuard.service';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit, CanComponentDeactivate {

  recipe: Recipe;
  editForm: FormGroup;
  name = "";
  imagePath = "";
  description = "";
  ingredientsFormArray = new FormArray([]);
  onRecipeEdit: boolean = false;
  @ViewChild("ingName") ingName: ElementRef;
  @ViewChild("ingAmount") ingAmount: ElementRef;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['index'] >= 0) {
      this.onRecipeEdit = true;
      this.recipe = this.recipeService.getRecipe(this.activatedRoute.snapshot.params['index']);
      this.initIngredients();
    }
    this.editForm = this.formBuilder.group({
      name: new FormControl(this.name),
      imagePath: new FormControl(this.imagePath),
      description: new FormControl(this.description),
      ingredients: this.ingredientsFormArray,
    });
  }

  addTempIngredient() {
    this.ingredientsFormArray.push(new FormGroup({
      name: new FormControl(this.ingName.nativeElement.value),
      amount: new FormControl(this.ingAmount.nativeElement.value),
    }));
    this.ingName.nativeElement.value = "";
    this.ingAmount.nativeElement.value = "";
  }

  deleteTempIngredient(index: number) {
    this.ingredientsFormArray.removeAt(index);
  }

  initIngredients() {
    this.name = this.recipe.name;
    this.imagePath = this.recipe.imagePath;
    this.description = this.recipe.description;
    for (var ing of this.recipe.ingredients) {
      this.ingredientsFormArray.push(new FormGroup({
        name: new FormControl(ing.name),
        amount: new FormControl(ing.amount),
      }))
    }
  }

  onSubmit(form: FormGroup) {
    if (this.onRecipeEdit) {
      this.recipeService.updateRecipe(this.activatedRoute.snapshot.params['index'], form.value);
      this.router.navigate(['../'], { relativeTo: this.activatedRoute }); //navigate one step back relative to activated route.
      this.onRecipeEdit = false;
    }
    else {
      this.recipeService.addRecipe(form.value);
      this.router.navigate(['../'], { relativeTo: this.activatedRoute }); //navigate one step back relative to activated route.
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.onRecipeEdit) {
      return confirm("Edit changes will not be saved");
    }
    else {
      return true;
    }
  }

}
