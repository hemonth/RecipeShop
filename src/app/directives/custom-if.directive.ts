import { Directive, Input, HostBinding, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
// custom structural directive, this directive is used in recipe list component where each item in the list with get one different syle property
export class CustomIfDirective {
  colors = ["Red", "Green", "Tomato", "Pink"];
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input('index') set appCustomIf(index: number) {
    this.backgroundColor = this.colors[index];
  }

  constructor(private templateRef: TemplateRef<any>, private vcReference: ViewContainerRef) { }


}
