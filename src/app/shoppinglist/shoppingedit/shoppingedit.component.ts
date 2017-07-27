import { Component, OnInit, OnDestroy, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/subscription';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppinglist.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit, OnDestroy {
  @ViewChild("f") editForm: NgForm;
  updateItemSubscription: Subscription;
  editItem: Ingredient;
  ingredientIndex: number;
  onUpdate: boolean = false;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.updateItemSubscription = this.slService.onUpdateItem.subscribe((index: number) => {
      this.onUpdate = true;
      this.ingredientIndex = index;
      this.editItem = this.slService.ingredients[index];
      this.editForm.setValue({
        nameI: this.editItem.name,
        amount: this.editItem.amount
      })
    });
  }

  onAddItem(form: NgForm) {
    console.log(form.value);
    if (this.onUpdate) {
      this.slService.updateIngredient(this.ingredientIndex, new Ingredient(form.value.nameI, form.value.amount));
    }
    else {
      this.slService.addIngredient(new Ingredient(form.value.nameI, form.value.amount));
    }
    this.onUpdate = false;
    this.editForm.reset();
  }

  onClear() {
    this.editForm.reset();
    this.onUpdate = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.ingredientIndex);
    this.editForm.reset();
    this.onUpdate = false;
  }

  ngOnDestroy() {
    this.updateItemSubscription.unsubscribe();
  }
}
