import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";


//Costante al cui interno ci sono tutti gli import dei moduli Material
const MaterialComponents = [
  //Button imports
  MatButtonModule,

]


@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule {
}
