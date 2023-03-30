import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dev-model',
  templateUrl: './dev-model.component.html',
  styleUrls: ['./dev-model.component.css']
})
export class DevModelComponent {
  @Input() name = '';

	constructor(public activeModal: NgbActiveModal) {}
}
