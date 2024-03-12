import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TitleComponent} from "./components/title/title.component";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {IsChikenDirective} from "./directives/is-chiken.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {ChickenProductsPipe} from "./pipes/chicken-products.pipe";
import {WordUpprePipe} from "./pipes/word-uppre.pipe";
import {RouterModule} from "@angular/router";
import {PopupComponent} from './components/popup/popup.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChikenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpprePipe,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChikenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpprePipe,
    PopupComponent,
  ],
})
export class SharedModule {
}
