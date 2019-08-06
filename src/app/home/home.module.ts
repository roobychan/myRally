import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from "angular-bootstrap-md";
import { IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule
  ]
})
export class HomeModule {}
