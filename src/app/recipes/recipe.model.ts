import { Component, OnInit } from '@angular/core';

export class Recipe implements OnInit {
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name:string,description:string,imagePath:string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
   }

  ngOnInit() {
  }

}
