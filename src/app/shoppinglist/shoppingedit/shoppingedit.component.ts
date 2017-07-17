import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppinglist.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

@ViewChild('nameInput') nameInputRef : ElementRef;
@ViewChild('amountInput') amountInputRef : ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIng);
  }
}
