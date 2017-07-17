import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class Recipe implements OnInit {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  constructor(name:string,description:string,imagePath:string, ingredients :Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
   }

  ngOnInit() {
  }

}
