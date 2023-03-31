import { NgModule } from "@angular/core";
import { FooterComponent } from './footer.component';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { DevModelComponent } from './dev-model/dev-model.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    FooterComponent,
    DevModelComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium,
      faFacebook,
      faLinkedin,
      faInstagram
    );
  }
 }
