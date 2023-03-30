import { NgModule } from "@angular/core";
import { FooterComponent } from './footer.component';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { DevModelComponent } from './dev-model/dev-model.component';

@NgModule({
  declarations: [
    FooterComponent,
    DevModelComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
