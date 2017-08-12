import { NgModule } from '@angular/core';
import { HeaderStylesDirective } from '../directives/header-styles.directive';
@NgModule({
  declarations:[
    HeaderStylesDirective,
  ],
  exports:[
    HeaderStylesDirective,
  ]
})
export class SharedModule{

}
