import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input, EventEmitter } from '@angular/core';

// Refer: https://www.w3schools.com/jsref/dom_obj_all.asp
@Directive({
  selector: '[appHeaderStyles]'
})
export class HeaderStylesDirective implements OnInit {
  // bgColor property is used on recipe shop in header component .ts
  @Input("bgCoLor") bgColor: string = "";
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundImage') backgroundImage: string;
  @HostBinding('style.opacity') opacity: string;

  // custom attribute directive need to have ElementRef and Renderer2 in the constructor
  //defined or with the help of HostBinding and HostListner we can create one

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  constructor() { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = "Tomato";
    this.opacity = '1';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

  @HostListener('click') mouseClick(eventData: Event) {
    this.backgroundColor = this.bgColor;
  }
}
