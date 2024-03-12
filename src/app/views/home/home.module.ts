import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {OrderComponent} from "../order/order.component";
import {FormsModule} from "@angular/forms";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AboutComponent,
    MainComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
    FormsModule,
    NgbModalModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
